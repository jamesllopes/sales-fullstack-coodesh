import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
// import { DirectTransferProps } from "@/types/internalTransfer";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

async function uploadFile(file: any) {
  console.log("entrou aqui");
  console.log(file);
  if (!file) return;
  const formData = new FormData();
  //   formData.append("file", file);
  formData.append(
    "file",
    new Blob([file], { type: "text/plain" }),
    "nome-do-arquivo.txt"
  );
  try {
    const response = await api.post(`/api/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response) {
      snackbar("Arquivo Enviado com Sucesso", "success");
      return response;
    }
  } catch (error: any) {
    console.log("error", error);
    snackbar("Erro ao enviar arquivo", "error");
    return error;
  }
}

export default function useUploadFile() {
  return useMutation(uploadFile);
}
