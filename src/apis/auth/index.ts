import { SignUpParams, SignInResponse } from "@src/types/auth";
import { instance } from "..";
import { APIResponse } from "@src/types/common";
import { SignInSchema } from "@src/schema/auth";

const basicPathName = "/auth";

export const authAPI = {
  signIn: (bodyData: SignInSchema) => {
    return instance.post(`${basicPathName}/signin`, bodyData);
  },
  signUp: (bodyData: SignUpParams): APIResponse<SignInResponse> => {
    return instance.post(`${basicPathName}/signup`, bodyData);
  },
};
