import UserModel from "../../models/UserSchema";

export interface RegisterData {
    username: string;
    password: string;
  }

  export interface RegisterResponse {
    user: typeof UserModel;
    message: string
  }