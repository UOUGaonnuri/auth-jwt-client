import backendConfig from "@/Config/api-config";
import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: backendConfig.backendHost,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
