import api from "./api";

export const getUsers = () => {
  return api.get("/telegram/mybot/user?limit=10&offset=0");
};

export const getUserMessages = (id: string) => {
  return api.get(`/telegram/mybot/messages/${id}?limit=200&offset=0`);
};

export const sendMessage = (id: string, text: string) => {
  return api.post(`/telegram/mybot/messages/${id}/send`, {
    text: text,
  });
};
