import { queryStringify } from "@src/utils";
import axios from "axios";

export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_PROTOCOL}://${
    import.meta.env.VITE_APP_HOST_NAME
  }:${import.meta.env.VITE_APP_PORT}/`,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: {
    serialize: (params) => queryStringify(params),
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  ({ response }) => {
    return Promise.reject(response);
  }
);
