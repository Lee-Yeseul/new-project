import { SignInResponse } from "@src/types/auth";
import { instance } from "..";
import { APIResponse } from "@src/types/common";
import { SignInSchema, SignUpSchema } from "@src/schema/auth";

const basicPathName = "/auth";

export const authAPI = {
  signIn: (bodyData: SignInSchema) => {
    return instance.post(`${basicPathName}/signin`, bodyData);
  },
  signUp: (bodyData: SignUpSchema): APIResponse<SignInResponse> => {
    return instance.post(`${basicPathName}/signup`, bodyData);
  },
  postKakaoLoginCode: (code: string): APIResponse<SignInResponse> => {
    return instance.post(`${basicPathName}/kakao-code`, { code });
  },
};
