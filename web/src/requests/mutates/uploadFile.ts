import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
// import { DirectTransferProps } from "@/types/internalTransfer";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

async function uploadFile(file: any) {
  if (!file || !file.name.endsWith(".txt")) {
    snackbar("Somente arquivos .txt são aceitos", "error");
    return;
  }

  try {
    const response = await api.post(`/api/upload`, file, {
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
    snackbar(error.response.data.message, "error");
    return error;
  }
}

export default function useUploadFile() {
  return useMutation(uploadFile);
}
