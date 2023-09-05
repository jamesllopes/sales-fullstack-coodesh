import useFetchTransactions from "@/requests/queries/getTransactions";
import { formatBrl } from "@/utils/formatBrl";
import { Spinner } from "../Spinner";
import { TransactionType } from "@/types/transaction";

export const ListTransactions = () => {
  const { data: transactions, isLoading } = useFetchTransactions();

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="relative overflow-y-scroll max-h-[600px] pb-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Vendedor
                </th>
                <th scope="col" className="px-6 py-3">
                  Descrição
                </th>
                <th scope="col" className="px-6 py-3">
                  Natureza
                </th>
                <th scope="col" className="px-6 py-3">
                  Produto
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Data
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.data?.map((item: TransactionType) => (
                <tr
                  key={item.transactionTypeId}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.seller}
                  </th>
                  <td className="px-6 py-4">
                    {item.transactionType.description}
                  </td>
                  <td className="px-6 py-4">{item.transactionType.nature}</td>
                  <td className="px-6 py-4">{item.product}</td>
                  <td className="px-6 py-4">
                    {formatBrl(Number(item.totalValue))}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
