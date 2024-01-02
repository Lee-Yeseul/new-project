import { authAPI } from "@src/apis/auth";
import { SignInSchema, SignUpSchema } from "@src/schema/auth";
import { SignInResponse } from "@src/types/auth";

import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useSignInMutation = (
  successCallback: (data: SignInResponse) => void,
  errorCallback: (error: Error) => void
) => {
  return useMutation<AxiosResponse<SignInResponse>, Error, SignInSchema>({
    mutationFn: (data: SignInSchema) => authAPI.signIn(data),
    onSuccess: ({ data }) => successCallback(data),
    onError: (error) => errorCallback(error),
  });
};

export const useSignUpMutation = (errorCallback: (error: Error) => void) => {
  return useMutation({
    mutationFn: (data: SignUpSchema) => authAPI.signUp(data),
    onError: (error) => errorCallback(error),
  });
};
