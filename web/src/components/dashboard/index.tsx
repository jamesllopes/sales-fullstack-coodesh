"use client";
import useUploadFile from "@/requests/mutates/uploadFile";
import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
import { useState } from "react";
import { ListTransactions } from "../ListTransactions";

export const DashComponent = () => {
  const [file, setFile] = useState(null);
  const { mutateAsync, status } = useUploadFile();

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUploadFile = async () => {
    if (!file) return;

    try {
      const response = await mutateAsync(file);
      if (response) {
      }
    } catch (error) {
      snackbar("Erro ao enviar", "error");
      console.log("erro fora", error);
    }
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center gap-6">
        <label
          className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          onChange={handleFileChange}
          className="block w-full text-md cursor-pointer text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
        <button
          type="button"
          className="py-2 px-8 bg-gray-100 text-black rounded-md hover:bg-gray-90 ease-in duration-200"
          onClick={handleUploadFile}
        >
          Enviar
        </button>
      </div>
      <ListTransactions />
    </div>
  );
};

/* 


import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Arquivo enviado com sucesso!");
        // Faça algo com a resposta se necessário
      } else {
        console.error("Erro ao enviar o arquivo.");
      }
    } catch (error) {
      console.error("Erro ao enviar o arquivo:", error);
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar Arquivo</button>
    </div>
  );
}

*/
