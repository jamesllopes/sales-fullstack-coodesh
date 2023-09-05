export interface TransactionProps {
  data: TransactionType[];
}

export type TransactionType = {
  product: string;
  seller: string;
  date: string;
  totalValue: string;
  transactionTypeId: number;
  transactionType: {
    description: string;
    nature: string;
  };
};
