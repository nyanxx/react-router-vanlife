import axios from "axios";
import { users } from "../data/userData";
import { delay } from "../utils";

export function checkAuthRoute() {
  const axioPost = axios.create({
    baseURL: "/api/auth",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  /****************************************[ Register a user ]****************************************/
  axioPost("/register", {
    data: {
      username: "testman",
      password: "testingpassword",
      email: "testexample@mail.com",
    },
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  /****************************************[ Login user ]****************************************/
  axioPost("/login", {
    data: {
      email: "testexample@mail.com",
      password: "testingpassword",
    },
  })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data.token));
    })
    .catch((err) => console.error(err));

  /****************************************[ Refresh ]****************************************/

  async function refreshUserToken() {
    await delay(2000);
    axioPost("/refresh", {
      // withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }
  refreshUserToken();

  /****************************************[ GET /profile request with aceess token ]****************************************/
  const myTokenFromLocalStorage = JSON.parse(localStorage.getItem("token")!);

  axios({
    method: "GET",
    url: "api/auth/profile",
    headers: {
      Authorization: `Bearer ${myTokenFromLocalStorage}`,
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.error(err));

  /****************************************[ Logout ]****************************************/
  async function logoutUser() {
    await delay(5000);
    axioPost("/logout", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${myTokenFromLocalStorage}`,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }
  logoutUser();

  /****************************************[ Log all users ]****************************************/
  console.table(users);
}
