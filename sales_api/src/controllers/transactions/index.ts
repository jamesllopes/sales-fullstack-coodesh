import { Request, Response } from "express";
import { objectData } from "../../utils/typeDescription";
const path = require("path");
import fs from "fs/promises";
import Sequelize from "sequelize";
import TypeTransactions from "../../db/models/TypeTransactions";
import Transactions from "../../db/models/Transations";
import {
  TableTypeTransactionProps,
  TransactionProps,
} from "../../types/transactions";
interface CustomRequest extends Request {
  user?: {
    id: string | number;
  };
}

export const uploadFile = async (req: CustomRequest, res: Response) => {
  const userId = req?.user?.id;
  const file = req.body;

  if (!file || file.length === 0) {
    return res.status(400).json({ message: "Envie um arquivo válido." });
  }

  try {
    const fileName = "sales.txt";
    const filePath = await path.join(__dirname, "../../file", fileName);

    await fs.writeFile(filePath, file);

    const fileString = (await fs.readFile(filePath)).toString();
    const lines = fileString.trim().split("\n");

    const typeTransaction: any = lines.map((item) => {
      const dataTypeTransaction = objectData(Number(item.slice(0, 1)));
      return dataTypeTransaction;
    });

    const hasNullTypeItem = typeTransaction.some(
      (transact: TableTypeTransactionProps) => transact.type === null
    );

    if (hasNullTypeItem) {
      return res.status(400).json({ message: "Envie um arquivo válido" });
    }

    const newTypeTransaction = await TypeTransactions.bulkCreate(
      typeTransaction
    );

    if (!newTypeTransaction) {
      return res
        .status(400)
        .json({ message: "O tipo de transação nao pôde ser criado." });
    }

    const typeTransactionIds = newTypeTransaction.map(
      (transaction) => transaction.id
    );

    const transactionsToCreate: any = lines.map((item, index) => {
      return {
        type_id: typeTransactionIds[index],
        user_id: userId,
        date: new Date(item.slice(1, 26)),
        product: item.slice(26, 56).trim(),
        value: Number(item.slice(56, 66)),
        seller: item.slice(66, 86),
      };
    });
    const hasNullItem = transactionsToCreate.some(
      (transact: TransactionProps) => transact.type_id === null
    );

    if (hasNullItem) {
      return res.status(400).json({ message: "Envie um arquivo válido" });
    }

    const newTransaction = await Transactions.bulkCreate(transactionsToCreate);

    if (!newTransaction) {
      return res
        .status(400)
        .json({ message: "O tipo de transação nao pôde ser criado." });
    }

    fs.unlink(filePath);

    return res.status(200).json({
      response: "Arquivo enviado com sucesso",
    });
  } catch (error: any) {
    return res.status(400).json({ message: error?.message });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const result = await Transactions.findAll({
      attributes: [
        "product",
        "seller",
        "date",
        [Sequelize.fn("SUM", Sequelize.col("value")), "totalValue"],
        [Sequelize.col("transactionType.id"), "transactionTypeId"],
        "transactionType.description",
        "transactionType.nature",
      ],
      include: [
        {
          model: TypeTransactions,
          as: "transactionType",
          attributes: ["description", "nature"],
        },
      ],
      group: [
        "seller",
        "product",
        "date",
        "transactionType.description",
        "transactionType.nature",
        "transactionType.id",
      ],
    });

    console.log(result);
    return res.status(200).json({ data: result });
  } catch (error: any) {
    return res.status(400).json({ message: error });
  }
};
