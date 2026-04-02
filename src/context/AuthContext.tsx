import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type UserData = {
  username: string | null;
  id: string | null;
};

type AuthContextValues = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<null | string>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  authStatus: "loading" | "authenticated" | "unauthenticated";
  setAuthStatus: React.Dispatch<
    React.SetStateAction<"loading" | "authenticated" | "unauthenticated">
  >;
  login: (loginData: object) => Promise<boolean>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValues | undefined>(undefined);

/**
 * @returns token, setToken, userData, setUserData, logout, login, authStatus, setAuthStatus
 */
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext must be used inside AuthContextProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthFetch = () => {
  const { token, setToken, logout } = useAuthContext();
  const authFetch = useCallback(
    async (
      URL: string,
      options: AxiosRequestConfig = {},
      isRetry = false,
    ): Promise<AxiosResponse> => {
      const accesstoken = token;

      try {
        const response = await axios(`${URL}`, {
          ...options,
          withCredentials: true,
          headers: {
            ...(options.headers || {}),
            ...(token && { Authorization: `Bearer ${accesstoken}` }),
            ...(options.data &&
              !(options.data instanceof FormData) && {
                "Content-Type": "application/json",
              }),
          },
        });

        if (response.status === 200) {
          return response;
        }

        throw new Error(
          `Response returned with unexpected status code:${response.status}`,
        );
      } catch (error) {
        if (error instanceof AxiosError) {
          if (!error.response) console.error("Check network connection!");
          if (error.response) {
            if (error.response.status !== 200 && !isRetry) {
              // Get new token - refresh
              try {
                const refreshResponse = await axios.post(
                  `/api/auth/refresh`,
                  {},
                  {
                    withCredentials: true,
                    headers: {
                      "Content-Type": "application/json",
                    },
                  },
                );

                // Add new token
                if (refreshResponse.status === 200) {
                  const newToken = refreshResponse.data.token;
                  setToken(newToken);
                }
              } catch (error) {
                if (error instanceof AxiosError) {
                  if (!error.response) {
                    console.error("Check network connection!");
                  } else {
                    if (error.response.status !== 200) {
                      // This is the final point of rejection where now the issue is with refreshtoken and we need to forcefully logout
                      logout();
                      throw new Error(
                        `${error.response.data.message || "Unauthorized"}: ${error.response.status}`,
                      );
                    }
                  }
                }
              }

              // Retry
              return authFetch(URL, options, true);
            }
          }
        } else {
          console.error("Unexpected Error:", error);
        }
        throw error;
      }
    },
    [setToken, token, logout],
  );

  return { authFetch, logout };
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<null | string>(null);
  const [userData, setUserData] = useState<UserData>({
    username: null,
    id: null,
  });
  const [authStatus, setAuthStatus] = useState<
    "loading" | "authenticated" | "unauthenticated"
  >("loading");

  const _set_login = (token: string) => {
    setToken(token);
    setAuthStatus("authenticated");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_header, payload, _signature] = token.split(".");
    try {
      const { id, username } = JSON.parse(atob(payload));
      setUserData({ username, id });
    } catch {
      /* empty */
    }
  };

  const login = async (loginData: object): Promise<boolean> => {
    try {
      const response = await axios.post("/api/auth/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        _set_login(response.data.token);
        return true;
      }
      return false;
    } catch (error) {
      setAuthStatus("unauthenticated");
      console.error(error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        "/api/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        // console.log(response.data);
      }
    } catch (error) {
      // axio error handling should be here
      console.error(error);
    } finally {
      setToken(null);
      setUserData({
        username: null,
        id: null,
      });
      setAuthStatus("unauthenticated");
    }
  };

  // Session Hydration
  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.post(
          "/api/auth/refresh",
          {},
          {
            withCredentials: true,
          },
        );

        if (!(response.status === 200)) {
          return setAuthStatus("unauthenticated");
        }

        if (response.status === 200) {
          // Add new token in auth context
          _set_login(response.data.token);
        }
      } catch {
        // console.error("SessionHydrationError:", err);
        // console.error("SH_Err");
        setAuthStatus("unauthenticated");
      }
    };

    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        userData,
        setUserData,
        login,
        logout,
        authStatus,
        setAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
