export type UserInfo = {
  email: string;
  password: string;
  username: string;
};

export type SignUpParams = UserInfo;

export type SignInResponse = {
  accessToken: string;
};
