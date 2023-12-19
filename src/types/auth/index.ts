export type UserInfo = {
  email: string;
  password: string;
  username: string;
};

export type SignUpParams = UserInfo;
export type SignInParams = Pick<UserInfo, "email" | "password">;
export type SignInResponse = {
  accessToken: string;
};
