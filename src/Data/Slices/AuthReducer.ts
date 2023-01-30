import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../Type/User";
import { BaseResponse } from "../Type/Response";

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = createSlice({
  name: "authReducer",
  initialState: initialState,
  reducers: {
    login_success: (state: UserState, action: PayloadAction<BaseResponse>) => {
      state.isLoggedIn = true;
      state.user = action.payload.data;
      localStorage.setItem(
        "ACCESS_TOKEN",
        action.payload.data.tokenInfo.accessToken
      );
    },
    remove_userInfo: (state: UserState) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("ACCESS_TOKEN");
    },
  },
});

export const { login_success, remove_userInfo } = authReducer.actions;
export default authReducer.reducer;
