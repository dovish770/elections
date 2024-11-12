import UserModel from "../../models/UserSchema";

interface UserState {
    user: typeof UserModel | null;
    status: string;
    error: string | null;
    token: string | null
}

export default UserState