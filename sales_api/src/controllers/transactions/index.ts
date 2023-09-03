import { Request, Response } from "express";
// import { transactionValidation } from "../../validations/transactionSchema";
// import TypeTransactions from "../../db/models/TypeTransactions";
// import { objectData } from "../../utils/typeDescription";
// import Transactions from "../../db/models/Transations";
// import { TransactionProps } from "../../types/transactions";
const path = require("path");

import fs from "fs";

// interface CustomRequest extends Request {
//   user?: {
//     id: string | number;
//   };
// }

// export const createTransaction = async (req: CustomRequest, res: Response) => {
//   const { type, date, product, value, seller }: TransactionProps = req.body;

//   const userId = req?.user?.id;
//   try {
//     await transactionValidation.validate(req.body);

//     const data = objectData(type);
//     const newTypeTransaction = await TypeTransactions.create({
//       ...data,
//     });

//     if (!newTypeTransaction) {
//       return res
//         .status(400)
//         .json({ message: "O tipo de transação nao pôde ser criado." });
//     }

//     const newTransaction = await Transactions.create({
//       type_id: newTypeTransaction.id,
//       user_id: userId as number,
//       date,
//       product,
//       value,
//       seller,
//     });

//     if (!newTransaction) {
//       return res
//         .status(400)
//         .json({ message: "A transação nao pôde ser criada." });
//     }

//     return res
//       .status(200)
//       .json({ message: "Transação cadastrada com sucesso." });
//   } catch (error: any) {
//     return res.status(400).json({ mensagem: error?.message });
//   }
// };

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const file = req.body;
    if (!file) {
      return res.status(400).json({ error: "Nenhum arquivo enviado." });
    }

    const fileName = "sales.txt";
    const filePath = path.join(__dirname, "../../file", fileName);

    fs.writeFile(filePath, file, (err) => {
      if (err) {
        console.error("Erro ao salvar o arquivo:", err);
        return res.status(500).json({ error: "Erro ao salvar o arquivo" });
      }

      fs.readFile(filePath, "utf-8", (err, fileContent) => {
        if (err) {
          console.error("Erro ao ler o arquivo:", err);
          return res.status(500).json({ error: "Erro ao ler o arquivo" });
        }

        console.log("Conteúdo do arquivo:", fileContent);

        return res.status(200).json({ data: fileContent });
      });
    });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};
