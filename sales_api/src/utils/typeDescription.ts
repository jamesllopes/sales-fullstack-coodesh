import { TypeTransactionProps } from "../types/transactions";

type index = 1 | 2 | 3 | 4 | number;
const typeDescription: { [key in index]: TypeTransactionProps } = {
  1: {
    type: 1,
    description: "Venda produtor",
    nature: "Entrada",
    signal: "+",
  },
  2: {
    type: 2,
    description: "Venda filiado",
    nature: "Entrada",
    signal: "+",
  },
  3: {
    type: 3,
    description: "Comissão paga",
    nature: "Saída",
    signal: "-",
  },
  4: {
    type: 4,
    description: "Comissão recebida",
    nature: "Entrada",
    signal: "+",
  },
} as const;

export const objectData = (k: index) => typeDescription[k];
