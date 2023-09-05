import { api } from "@/services/axios";
import { snackbar } from "@/utils/snackbar";
import { useQuery } from "react-query";
import { TransactionProps } from "@/types/transaction";
import { destroyCookie, parseCookies } from "nookies";

async function getTransactions() {
  const { "@SALES_TOKEN": token } = parseCookies();
  try {
    const response = await api.get<TransactionProps>(`/api/transactions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    snackbar(error.response.data.message, "error");
  }
}

export default function useFetchTransactions() {
  return useQuery(["getTransactions"], getTransactions, {
    refetchOnWindowFocus: false,
  });
}
