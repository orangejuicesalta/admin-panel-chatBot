import { defineStore } from "pinia";
import { getUsers, getUserMessages, sendMessage } from "../api/users";
import { IMessages, IUser } from "./interfaces";

export const useUsers = defineStore("users", {
  state: () => ({
    error: false,
    loading: false,
    usersList: [] as IUser[],
    userMessages: [] as IMessages[],
    usersMap: {} as Map<string, number>,
  }),
  actions: {
    async getUsersList() {
      try {
        const data = await getUsers();
        this.usersList = data.data;
        this.usersMap = new Map<string, number>();

        this.usersList.forEach((chat) => {
          this.usersMap?.set(chat.id, 0);
        });
      } catch (e: any) {
        console.log(e);
      }
    },
    async getUserMessages(id: string) {
      try {
        const data = await getUserMessages(id);
        this.userMessages = data.data.reverse();
        this.usersMap?.set(id, 0);
      } catch (e: any) {
        console.log(e);
      }
    },
    async sendChatMessage(id: string, text: string) {
      try {
        await sendMessage(id, text);
      } catch (e: any) {
        console.log(e);
      }
    },
  },
});
