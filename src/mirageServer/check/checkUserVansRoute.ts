import axios, { AxiosError } from "axios";
import { delay } from "../utils";

type PostUser = {
  username: string;
  password: string;
  email: string;
};

const user: PostUser = {
  username: "test",
  password: "Test@123",
  email: "test@test.com",
};

export async function checkUserVansRoute() {
  _register_a_user();
  _login_that_user();

  await delay(1000);
  const token = _get_token_from_local_storage();
  // console.log(token);

  // Creating axios instance
  const axiosGet = axios.create({
    baseURL: "api/user/vans",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // Handling error
  axiosGet.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err instanceof AxiosError) {
        if (!err.response) err.message = "Check network connection.";
        if (err.response?.status === 400)
          err.message =
            `${err.response.status} : ` + err.response.data.message ||
            "Bad Request";
        if (err.response?.status === 401)
          err.message =
            `${err.response.status} : ` + err.response.data.message ||
            "Unauthorized";
        if (err.response?.status === 404)
          err.message =
            `${err.response.status} : ` + err.response.data.message ||
            "Not Found";
      } else {
        err.message =
          `${err.response.status} : ` +
            "Unexpected error:" +
            err.response.data.message || err.message;
      }
      return Promise.reject(err.message);
    },
  );

  /* Checks */

  // Get user vans with sorting and filtering enabled
  axiosGet("?type=comfort&price=htl")
    .then((res) => console.table(res.data))
    .catch((err) => console.error(err));

  // Get user van by van id (non-existant)
  axiosGet("/9999")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  // Get user van by van id
  axiosGet("/4")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}

function _register_a_user() {
  axios
    .post("api/auth/register", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res.data))
    .catch((err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 409)
          return console.error(err.response.data.message);
        console.error("Error:", err);
      } else {
        console.error("Unexpected error:", err);
      }
    });
}

function _login_that_user() {
  axios
    .post(
      "api/auth/login",
      {
        email: user.email,
        password: user.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    .then((res) => {
      console.log(res.status === 200 && "User logged in successfully!");
      localStorage.setItem("token", JSON.stringify(res.data.token));
    })
    .catch((err) => console.error(err));
}

function _get_token_from_local_storage(): string {
  try {
    const tokenString = localStorage.getItem("token");
    if (!tokenString) throw new Error("No token string");
    const token = JSON.parse(tokenString);
    if (!token) throw new Error("No token");
    return token;
  } catch (error) {
    console.log(error);
    return "";
  }
}
