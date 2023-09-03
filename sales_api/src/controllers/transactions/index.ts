import { Request, Response } from "express";
// import { transactionValidation } from "../../validations/transactionSchema";
import TypeTransactions from "../../db/models/TypeTransactions";
import { objectData } from "../../utils/typeDescription";
import Transactions from "../../db/models/Transations";
import {
  TransactionProps,
  TypeTransactionProps,
} from "../../types/transactions";
const path = require("path");

import fs from "fs";

interface CustomRequest extends Request {
  user?: {
    id: string | number;
  };
}

export const uploadFile = async (req: CustomRequest, res: Response) => {
  const userId = req?.user?.id;
  try {
    const file = req.body;
    if (!file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    const fileName = "sales.txt";
    const filePath = path.join(__dirname, "../../file", fileName);
    let data = "";
    fs.writeFile(filePath, file, async (err) => {
      if (err) {
        console.error("Erro ao salvar o arquivo:", err);
        return res.status(500).json({ error: "Erro ao salvar o arquivo" });
      }

      fs.readFile(filePath, "utf-8", async (err, fileContent) => {
        if (err) {
          console.error("Erro ao ler o arquivo:", err);
          return res.status(500).json({ error: "Erro ao ler o arquivo" });
        }

        const dataArray = fileContent.split("\n");

        const typeTransaction: any = [];
        const transaction: any = [];
        dataArray.forEach((item) => {
          const dataTypeTransaction = objectData(Number(item.slice(0, 1)));

          typeTransaction.push(dataTypeTransaction);
        });
        const newTypeTransaction = await TypeTransactions.bulkCreate(
          typeTransaction
        );

        if (!newTypeTransaction) {
          return res
            .status(400)
            .json({ message: "O tipo de transação nao pôde ser criado." });
        }

        dataArray.forEach((item) => {
          transaction.push({
            type_id: Number(item.slice(0, 1)),
            user_id: userId,
            date: new Date(item.slice(1, 26)),
            product: item.slice(26, 56).trim(),
            value: Number(item.slice(56, 66)),
            seller: item.slice(66, 86),
          });
        });

        const newTransaction = await Transactions.bulkCreate(transaction);

        if (!newTransaction) {
          return res
            .status(400)
            .json({ message: "O tipo de transação nao pôde ser criado." });
        }

        return res.status(200).json({
          response: {
            success: true,
            data: newTransaction,
          },
        });
      });
    });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};
