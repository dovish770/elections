import UserModel from "../../models/UserSchema";

export interface LoginResponse {
    user: typeof UserModel;
    token?: string;
    message: string
  }


  

export interface LoginData {
  username: string;
  password: string;
}

