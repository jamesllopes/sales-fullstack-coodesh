"use client";
import { api } from "@/services/axios";
import { createContext, useEffect, useState } from "react";
import { snackbar } from "@/utils/snackbar";
import {
  AuthContextData,
  SigninCreadentials,
  SignupData,
  User,
  UserData,
} from "@/types/auth";
import { useRouter } from "next/navigation";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const signin = async ({ email, password }: SigninCreadentials) => {
    try {
      setIsLoading(true);
      const response: any = await api.post<{ data: UserData }>("api/signin", {
        email,
        password,
      });
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      setCookie(null, "@SALES_TOKEN", response?.data?.token, {
        maxAge: 60 * 60,
        path: "/",
        httpOnly: false,
      });
      setUser(response.data.user);

      snackbar(`Bem-Vindo, ${response?.data?.user?.name}!`, "success");
      router.push("/dashboard");
    } catch (error: any) {
      snackbar(error?.response?.data?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async ({ email, name, password }: SignupData) => {
    setIsLoading(true);

    try {
      await api.post<{ data: UserData }>("/api/signup", {
        email,
        name,
        password,
      });

      snackbar("Conta criada com sucesso", "success");
      router.push("/auth/signin");
    } catch (error: any) {
      snackbar(error?.response?.data?.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    destroyCookie(null, "@SALES_TOKEN", {
      path: "/",
    });

    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        user,
        logout,
        isLoading,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
