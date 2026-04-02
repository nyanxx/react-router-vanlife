import axios, { AxiosError } from "axios";

// These are not protected routes so no sending token or auth
export function checkVansRoute() {
  // Creating axios instance
  const axiosGet = axios.create({
    baseURL: "api/vans",
    method: "GET",
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

  // Get all vans
  axiosGet
    .get("/")
    .then((res) => console.table(res.data))
    .catch((err) => console.error(err));

  // Get vans with sorting and filtering enabled
  axiosGet
    .get("?type=eco&price=htl")
    .then((res) => console.table(res.data))
    .catch((err) => console.error(err));

  // Get van by van id (non-existant)
  axiosGet
    .get("9999")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  // Get van by van id
  axiosGet
    .get("4")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}
