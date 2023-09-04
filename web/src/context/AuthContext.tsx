"use client";
import { api } from "@/services/axios";
import { createContext, useEffect, useState } from "react";
import { snackbar } from "@/utils/snackbar";
import {
  AuthContextData,
  SigninCreadentials,
  SignupData,
  UserData,
} from "@/types/auth";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>();
  const router = useRouter();

  // const signin = async (data: SigninCreadentials) => {
  //   console.log(data);
  //   try {
  //     const response = await api.post("/api/signin", {
  //       ...data,
  //     });
  //     response?.data?.data?.token;

  //     setUser(response?.data?.data);
  //     console.log(response);
  //     setCookie(null, "@SALES_TOKEN", response?.data?.data?.token, {
  //       maxAge: 60 * 60 * 8,
  //       path: "/",
  //     });
  //     snackbar(`Bem vindo(a), ${user?.user.name}`, "success");
  //     router.push("/dashboard");
  //   } catch (error: any) {
  //     snackbar(error.message, "error");
  //   }
  // };

  const signin = async ({ email, password }: SigninCreadentials) => {
    try {
      // setIsLoading(true);
      const response: any = await api.post<{ data: UserData }>("api/signin", {
        email,
        password,
      });
      console.log("auth", response);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.accessToken}`;

      setUser(response.data);
      // setUserToken(response?.data?.accessToken);
      setCookie(null, "@SALES_TOKEN", response.data.token, {
        maxAge: 60 * 60,
        path: "/",
      });

      snackbar(`Bem-Vindo, ${response?.data?.name}!`, "success");
      router.push("/dashboard");
      // setIsLoading(false);
    } catch (error: any) {
      const { statusCode } = error?.response?.data;

      let title: string = "Erro ao fazer login";
      if (statusCode === 404) title = "Email não encontrado";
      if (statusCode === 403) title = "Senha incorreta";

      snackbar(error.response.data.message, "error");
      // setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
