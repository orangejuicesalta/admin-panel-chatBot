import { defineStore } from "pinia";
import { getChats, getChatMessages, sendMessage } from "../api/chats";
import { IMessages, IChat } from "./interfaces";

export const useChats = defineStore("chats", {
  state: () => ({
    error: false,
    loading: false,
    chatsList: [] as IChat[],
    chatMessages: [] as IMessages[],
    chatMap: {} as Map<string, number> | null,
  }),
  actions: {
    async getChatsList() {
      try {
        const data = await getChats();
        this.chatsList = data.data;
        this.chatsList.forEach((chat) => {
          this.chatMap?.set(chat.id, 0);
        });
        console.log(data);
      } catch (e: any) {
        console.log(e);
      }
    },
    async getChatMessages(id: string) {
      try {
        const data = await getChatMessages(id);
        console.log(data.data);
        this.chatMessages = data.data.reverse();
        this.chatMap?.set(id, 0);
      } catch (e: any) {
        console.log(e);
      }
    },
    async sendChatMessage(id: string, text: string) {
      try {
        const data = await sendMessage(id, text);
        console.log(data);
      } catch (e: any) {
        console.log(e);
      }
    },
  },
});
