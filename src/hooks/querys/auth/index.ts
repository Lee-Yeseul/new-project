import { authAPI } from "@src/apis/auth";
import { SignInParams, SignInResponse, SignUpParams } from "@src/types/auth";

import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export const useSignInMutation = (
  successCallback: (data: SignInResponse) => void,
  errorCallback: (error: Error) => void
) => {
  return useMutation<AxiosResponse<SignInResponse>, Error, SignInParams>({
    mutationFn: (data: SignInParams) => authAPI.signIn(data),
    onSuccess: ({ data }) => successCallback(data),
    onError: (error) => errorCallback(error),
  });
};

export const useSignUpMutation = (successCallback: () => void) => {
  return useMutation({
    mutationFn: (data: SignUpParams) => authAPI.signUp(data),
    onSuccess: successCallback,
  });
};
