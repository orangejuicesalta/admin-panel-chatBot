import api from "./api";

export function registerUser(userName: string, password: string) {
  return api.post("/auth/register", {
    grant_type: "",
    username: userName,
    password: password,
    scope: "",
    client_id: "",
    client_secret: "",
  });
}

export function loginUser(userName: string, password: string) {
  return api.post("/auth/token", {
    grant_type: "",
    username: userName,
    password: password,
    scope: "",
    client_id: "",
    client_secret: "",
  });
}

export function getMe() {
  return api.get("/auth/user/me/");
}
