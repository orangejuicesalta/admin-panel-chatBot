import { defineStore } from "pinia";
import { getUsers, getUserMessages, sendMessage } from "../api/users";
import { IMessages, IUser } from "./interfaces";



export const useUsers = defineStore("users", {
  state: () => ({
    error: false,
    loading: false,
    usersList: [] as IUser[],
    userMessages: [] as IMessages[],
  }),
  actions: {
    async getUsersList() {
      this.error = false;
      this.loading = true;
      try {
        const data = await getUsers();
        console.log(data.data);
        this.usersList = data.data;
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async getUserMessages(id: string) {
      this.error = false;
      this.loading = true;
      try {
        const data = await getUserMessages(id);
        console.log(data.data);
        this.userMessages = data.data.reverse();
      } catch (e: any) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
    async sendChatMessage(id: string, text: string) {
      console.log(id, text);
      console.log(typeof id);
      try {
        const data = await sendMessage(id, text);
        console.log(data);

      } catch (e: any) {
        console.log(e);
      }
    },
  },
});
