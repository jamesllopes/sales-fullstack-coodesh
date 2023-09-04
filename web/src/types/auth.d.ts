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

export type User = {
  id: number;
  name: string;
  email: string;
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
  user?: User | null;
  signin: (data: SigninCreadentials) => void;
  logout: () => void;
};
