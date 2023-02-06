import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import type { AxiosResponse } from "axios";
import { useAuthStore } from "../store/authorization";
import router from "../router/index";

const URL_MAIN = "https://vm4200374.25ssd.had.wf";
export const URL_WEBSOCKET = "wss://vm4200374.25ssd.had.wf/messages/ws";
const api = axios.create({
  baseURL: URL_MAIN,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    if (config.headers) {
      if (config.url?.includes("/send") && config.method === "post") {
        config.headers["Content-Type"] = "application/json";
      } else {
        config.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      const { getToken } = useAuthStore();
      config.headers.Authorization = !getToken()
        ? undefined
        : `Bearer ${getToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res: AxiosResponse<any>) => {
    return res;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      router.push("/auth");
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default api;
