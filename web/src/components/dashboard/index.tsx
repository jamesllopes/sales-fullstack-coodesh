"use client";
import useUploadFile from "@/requests/mutates/uploadFile";
import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
import { useState } from "react";
import { ListTransactions } from "../ListTransactions";
import { useQueryClient } from "react-query";

export const DashComponent = () => {
  const [file, setFile] = useState(null);
  const { mutateAsync, status } = useUploadFile();
  const queryClient = useQueryClient();

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleUploadFile = async () => {
    if (!file) return;

    try {
      const response = await mutateAsync(file);
      queryClient.invalidateQueries("getTransactions");
    } catch (error: any) {
      snackbar(error.response.data.message, "error");
    }
  };

  return (
    <div className="w-full flex flex-col  gap-4 items-center justify-center">
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
