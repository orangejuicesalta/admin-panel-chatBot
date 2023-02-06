import { registerUser, loginUser, getMe } from "../api/authorization";
import { defineStore } from "pinia";
import router from "../router/index";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    error: false,
    loading: false,
    userName: localStorage.getItem("username") ?? "",
  }),
  actions: {
    async login(userName: string, password: string) {
      this.error = false;
      this.loading = true;
      try {
        const data = await loginUser(userName, password);
        console.log(data);
        this.setAccessToken(data.data.access_token);
        router.push("/chats/list");
      } catch (e: any) {
        this.error = true;
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async register(userName: string, password: string) {
      this.error = false;
      this.loading = true;
      try {
        const data = await registerUser(userName, password);
        console.log(data);
        router.push("/chats/list");
      } catch (e: any) {
        this.error = true;
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    setAccessToken(accessToken: string) {
      localStorage.setItem("access_token", accessToken);
    },
    getToken() {
      return localStorage.getItem("access_token");
    },
    async getMyProfile() {
      try {
        const data = await getMe();
        console.log(data.data);
        if (!localStorage.getItem("username")) {
          localStorage.setItem("username", data?.data.username);
          localStorage.setItem("my_id", data.data.id);
        }
      } catch (e: any) {
        console.log(e);
      }
    },
  },
});
