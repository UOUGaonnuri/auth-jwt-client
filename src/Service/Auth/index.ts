import { LoginForm, RegisterForm } from "@/Data/Type/Auth";
import { CustomAxios } from "../CustomAxios";

export function registerRequest(params: RegisterForm) {
  return CustomAxios.post("/api/auth/v1/register", params);
}

export function loginRequest(params: LoginForm) {
  return CustomAxios.post("/api/auth/v1/login", params);
}

export function logout() {
  return CustomAxios.post("/api/auth/v1/logout");
}
