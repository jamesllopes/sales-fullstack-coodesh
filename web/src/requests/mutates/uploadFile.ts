import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
import { parseCookies } from "nookies";
import { useMutation } from "react-query";

async function uploadFile(file: any) {
  if (!file || !file.name.endsWith(".txt")) {
    snackbar("Somente arquivos .txt são aceitos", "error");
    return;
  }
  const { "@SALES_TOKEN": token } = parseCookies();

  try {
    const response = await api.post(`/api/upload`, file, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response) {
      snackbar("Arquivo Enviado com Sucesso", "success");
      return response;
    }
  } catch (error: any) {
    snackbar(error.response.data.message, "error");
    return error;
  }
}

export default function useUploadFile() {
  return useMutation(uploadFile);
}
