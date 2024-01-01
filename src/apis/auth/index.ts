import { SignUpParams, SignInParams, SignInResponse } from "@src/types/auth";
import { instance } from "..";
import { APIResponse } from "@src/types/common";

const basicPathName = "/auth";

export const authAPI = {
  signIn: (bodyData: SignInParams) => {
    return instance.post(`${basicPathName}/signin`, bodyData);
  },
  signUp: (bodyData: SignUpParams): APIResponse<SignInResponse> => {
    return instance.post(`${basicPathName}/signup`, bodyData);
  },
};
