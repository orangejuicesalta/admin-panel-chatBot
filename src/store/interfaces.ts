export interface IUser {
    full_name: null | string;
    id: string;
    language_code: string;
    username: string;
  }
  export interface IMessages {
    id: string;
    date: string;
    user: {
      id: string;
      username: string;
      full_name: null | string;
      language_code: null | string;
    };
    chat: {
      id: string;
      username: string;
      full_name: string;
    };
    text: string;
  }
  export interface IChat {
    full_name: null | string;
    id: string,
    username: string
  }