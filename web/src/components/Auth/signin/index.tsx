"use client";
import { Spinner } from "@/components/Spinner";
import { useAuth } from "@/hooks/useAuth";
import { SigninCreadentials } from "@/types/auth";
import Link from "next/link";
import { useState } from "react";

export const SigninComponent = () => {
  const [dataForm, setDataForm] = useState<SigninCreadentials>({
    email: "",
    password: "",
  });
  const { signin, isLoading } = useAuth();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(dataForm as SigninCreadentials);
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="/assets/upload.svg" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
            Entre com sua conta
          </h2>
          <p className="text-gray-90 text-center mt-4 text-sm">
            Você pode fazer um cadastro, ou logar com a conta que foi
            disponibilizada para teste.
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-100"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  value={dataForm.email}
                  onChange={(e) =>
                    setDataForm({ ...dataForm, email: e.target.value })
                  }
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-100"
                >
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={dataForm.password}
                  onChange={(e) =>
                    setDataForm({ ...dataForm, password: e.target.value })
                  }
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? <Spinner /> : "Entrar"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-90">
            Se preferir fazer o cadastro,{" "}
            <Link
              href="/auth/signup"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              clique aqui.
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
