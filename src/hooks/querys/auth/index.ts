import { authAPI } from "@src/apis/auth";
import { SignInParams, SignUpParams } from "@src/types/auth";

import { useMutation } from "@tanstack/react-query";

export const useSignInMutation = (successCallback: () => void) => {
  return useMutation({
    mutationFn: (data: SignInParams) => authAPI.signIn(data),
    onSuccess: successCallback,
  });
};

export const useSignUpMutation = (successCallback: () => void) => {
  return useMutation({
    mutationFn: (data: SignUpParams) => authAPI.signUp(data),
    onSuccess: successCallback,
  });
};
