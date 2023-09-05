export interface TypeTransactionProps {
  type?: number;
  description?: string;
  nature?: "Saída" | "Entrada";
  signal?: "+" | "-";
}

export type TypeTransactionPropsGeneric = {
  type: number;
  description: string;
  nature: string;
  signal: string;
}[];

export type TransactionProps = {
  id: number;
  user_id: number;
  type_id: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
};

export type TableTypeTransactionProps = {
  id: number;
  type: number;
  description: string;
  nature: string;
  signal: string;
};
