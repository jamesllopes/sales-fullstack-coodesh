import useFetchTransactions from "@/requests/queries/getTransactions";

export const ListTransactions = () => {
  const { data: transactions } = useFetchTransactions();

  return (
    <div>
      <p></p>
    </div>
  );
};
