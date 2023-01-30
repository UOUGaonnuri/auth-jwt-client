import { LoginForm, RegisterForm } from "@/Data/Type/Auth";
import { CustomAxios } from "../CustomAxios";
import { BaseResponse } from "@/Data/Type/Response";

export function registerRequest(params: RegisterForm) {
  return CustomAxios.post("/api/auth/v1/register", params);
}

export function loginRequest(params: LoginForm) {
  return CustomAxios.post("/api/auth/v1/login", params);
}

export function logout() {
  return CustomAxios.post("/api/auth/v1/logout");
}

export async function refreshToken() {
  await CustomAxios.post("/api/auth/v1/reissue")
    .then((res) => {
      const response: BaseResponse = res.data;
      const newAccessToken = response.data.accessToken;
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.setItem("ACCESS_TOKEN", newAccessToken);
    })
    .catch((ex) => {
      console.log("Token Reissue Fail : " + ex);
    });
}
