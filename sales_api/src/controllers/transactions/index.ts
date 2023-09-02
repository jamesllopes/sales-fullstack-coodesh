import { Request, Response } from "express";
import { transactionValidation } from "../../validations/transactionSchema";
import TypeTransactions from "../../db/models/TypeTransactions";
import { objectData } from "../../utils/typeDescription";
import Transactions from "../../db/models/Transations";
import { TransactionProps } from "../../types/transactions";

interface CustomRequest extends Request {
  user?: {
    id: string | number;
  };
}

export const createTransaction = async (req: CustomRequest, res: Response) => {
  const { type, date, product, value, seller }: TransactionProps = req.body;
  const userId = req?.user?.id;
  try {
    await transactionValidation.validate(req.body);

    const data = objectData(type);
    const newTypeTransaction = await TypeTransactions.create({
      ...data,
    });

    if (!newTypeTransaction) {
      return res
        .status(400)
        .json({ message: "O tipo de transação nao pôde ser criado." });
    }

    const newTransaction = await Transactions.create({
      type_id: newTypeTransaction.id,
      user_id: userId as number,
      date,
      product,
      value,
      seller,
    });

    if (!newTransaction) {
      return res
        .status(400)
        .json({ message: "A transação nao pôde ser criada." });
    }

    return res
      .status(200)
      .json({ message: "Transação cadastrada com sucesso." });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};
