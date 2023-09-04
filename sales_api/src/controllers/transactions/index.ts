import { Request, Response } from "express";
import { objectData } from "../../utils/typeDescription";
const path = require("path");
import fs from "fs";
import { findUserById } from "../../models/users";
import Sequelize from "sequelize";
import TypeTransactions, {
  TypeTransactionsInput,
} from "../../db/models/TypeTransactions";
import Transactions from "../../db/models/Transations";
import { TypeTransactionProps } from "../../types/transactions";
interface CustomRequest extends Request {
  user?: {
    id: string | number;
  };
}

const { Op } = Sequelize;

export const uploadFile = async (req: CustomRequest, res: Response) => {
  const userId = req?.user?.id;
  const file = req.body;

  if (!file || file.length === 0) {
    return res.status(400).json({ error: "Nenhum arquivo enviado." });
  }

  try {
    const fileName = "sales.txt";
    const filePath = await path.join(__dirname, "../../file", fileName);
    fs.writeFile(filePath, file, (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao salvar o arquivo" });
      }

      fs.readFile(filePath, "utf-8", async (err, fileContent) => {
        if (!fileContent) {
          return res.status(500).json({ error: "Erro ao ler o arquivo" });
        }

        // const typeTransaction: any = [];
        const transaction: any = [];
        const dataArray = fileContent.split("\n");

        const typeTransaction: any = dataArray.map((item, index) => {
          const dataTypeTransaction = objectData(Number(item.slice(0, 1)));
          return dataTypeTransaction;
        });

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

        const transactionsToCreate: any = dataArray.map((item, index) => {
          return {
            type_id: typeTransactionIds[index],
            user_id: userId,
            date: new Date(item.slice(1, 26)),
            product: item.slice(26, 56).trim(),
            value: Number(item.slice(56, 66)),
            seller: item.slice(66, 86),
          };
        });

        const newTransaction = await Transactions.bulkCreate(
          transactionsToCreate
        );

        if (!newTransaction) {
          return res
            .status(400)
            .json({ message: "O tipo de transação nao pôde ser criado." });
        }
      });
    });

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
        "id",
        "date",
        "product",
        "seller",
        [Sequelize.literal("SUM(value)"), "totalValue"],
      ],
      include: [
        {
          model: TypeTransactions,
          as: "transactionType",
          where: {
            type: {
              [Op.in]: [1, 2],
            },
          },
          attributes: ["description"],
        },
      ],
      group: ["id"],
    });

    console.log(result);
    return res.status(200).json({ data: result });
  } catch (error: any) {
    return res.status(400).json({ message: error?.message });
  }
};
