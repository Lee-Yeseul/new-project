import { queryStringify } from "@src/utils";
import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  paramsSerializer: {
    serialize: (params) => queryStringify(params),
  },
});