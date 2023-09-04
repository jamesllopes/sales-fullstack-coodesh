export type SignupData = {
  email: string;
  name: string;
  password: string;
};

export type SigninCreadentials = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type UserData = {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
};

export type AuthContextData = {
  user?: UserData | null;
  signin: (data: SigninCreadentials) => void;
};
