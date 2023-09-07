export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  email?: string;
  role?: string;
  token: string;
  refreshToken: string;
};

export type IRefreshTokenResponse = {
  token: string;
};
