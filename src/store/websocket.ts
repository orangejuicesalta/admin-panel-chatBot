import { defineStore } from "pinia";
import { useUsers } from "./users_store";
import { IMessages } from "./interfaces";
import { useChats } from "./chats_store";

export const useWebsocket = defineStore("websocket", {
  state: () => ({}),
  actions: {
    manageMessage(message: IMessages, chatsView: boolean) {
      const usersStore = useUsers();
      const chatsStore = useChats();
      if (chatsView) {
        if (chatsStore.chatMessages) {
          if (chatsStore.chatMessages[0].chat.id === message.chat.id) {
            chatsStore.chatMessages.push(message);
          } else {
            let newValue = chatsStore.chatMap?.get(message.chat.id);
            if (newValue) chatsStore.chatMap?.set(message.chat.id, newValue++);
          }
        }
      } else {
        if (usersStore.userMessages) {
          if (usersStore.userMessages[0].chat.id === message.chat.id) {
            usersStore.userMessages.push(message);
          }
        }
      }
    },
  },
});
