import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserState from "../../types/reduxTypes/userState";
import {LoginResponse} from '../../types/serverTypes/LoginTypes'
import {loginUser, registerUser} from '../../service/FeatureService/userSliceService'

const initialState: UserState = {
    user: null,
    status: "idle",
    error: null,
    token: null
};

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
        state.error = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
          state.status = "succeeded";
          state.user = action.payload.user;
        //   state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload || "Login failed";
        })
        .addCase(registerUser.pending, (state) => {
          state.status = "loading";
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
          state.status = "succeeded";
          state.user = action.payload.user;
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.payload || "Register failed";
        });
    }
  });
  
  export const { logout } = userSlice.actions;
  export default userSlice.reducer;
