import { api } from "@/services/axios";
import { useQuery } from "react-query";

async function getTransactions(ctx: any) {
  const [,] = ctx.queryKey;
  try {
    const response = await api.get(`/api/transactions`);

    return response.data;
  } catch {}
}

export default function useFetchTransactions() {
  return useQuery(["getTransactions"], getTransactions, {
    refetchOnWindowFocus: false,
  });
}
