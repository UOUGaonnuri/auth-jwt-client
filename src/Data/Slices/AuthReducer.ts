import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserDetail, UserState } from "../Type/User";
import { BaseResponse } from "../Type/Response";

const initUser: UserDetail = {
  userId: -1,
  userEmail: "",
  userName: "",
  role: "",
};

const initialState: UserState = {
  isLoggedIn: false,
  user: initUser,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    login_success: (state: UserState, action: PayloadAction<BaseResponse>) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.userInfo;
      localStorage.setItem(
        "ACCESS_TOKEN",
        action.payload.data.tokenInfo.accessToken
      );
    },
    remove_userInfo: (state: UserState) => {
      state.isLoggedIn = false;
      state.user = initUser;
      localStorage.removeItem("ACCESS_TOKEN");
    },
  },
});

export const { login_success, remove_userInfo } = authReducer.actions;
export default authReducer.reducer;
