export interface TransactionProps {
  type: 1 | 2 | 3 | 4;
  type_id: number;
  user_id: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
}

export interface TypeTransactionProps {
  type?: 1 | 2 | 3 | 4 | number;
  description?: string;
  nature?: "Saída" | "Entrada";
  signal?: "+" | "-";
}
[];
