import { api } from "@/services/axios";
// import { CurrencyList } from "@/types/commom";
import { QueryFunctionContext, useQuery } from "react-query";

async function getTransactions(ctx: any) {
  const [,] = ctx.queryKey;
  try {
    const response = await api.get(`/api/transactions`);

    return response.data.data;
  } catch {}
}

export default function useFetchTransactions() {
  return useQuery(["getTransactions"], getTransactions, {
    refetchOnWindowFocus: false,
  });
}
