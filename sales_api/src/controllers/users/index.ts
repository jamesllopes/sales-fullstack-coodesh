import { Request, Response } from "express";
import { userValidation } from "../../validations/signupSchema";
import Users from "../../db/models/Users";
import sequelizeConnection from "../../db/sequelize";
// export const signin = async (req: Request, res: Response) => {
//   const { email, password } = req.body;

//   try {
//   } catch (error: any) {
//     return res.status(400).json({ mensagem: error.message });
//   }
// };

export const signUp = async (req: Request, res: Response) => {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "Dados ausentes no corpo da solicitação." });
  }
  const { name, email, password } = req.body;

  try {
    await userValidation.validate(req.body);

    const findUser = await Users.findOne({
      where: { email: email },
    });

    if (findUser) {
      return res
        .status(403)
        .json({ message: "email já está sendo utilizado." });
    }
    const newUser = await Users.create({
      name,
      email,
      password,
    });
    if (!newUser) {
      return res.status(400).json({ message: "Usuário não pôde ser criado" });
    }
    return res.status(200).json({ message: "Usuário criado com sucesso." });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};
