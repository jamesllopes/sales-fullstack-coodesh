import { Request, Response } from "express";
import { userValidation } from "../../validations/signupSchema";
import Users from "../../db/models/Users";
import { validationSignin } from "../../validations/signinSchema";
import { findUserByEmail } from "../../models/users";
// import * as bcrypt from "bcrypt";
const bcrypt = require("bcrypt");
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../config/jwtSecret";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await validationSignin.validate(req.body);
    const user: any = await findUserByEmail(email);
    const validatePassword = await bcrypt.compare(password, user?.password);
    if (!user || !validatePassword) {
      return res
        .status(400)
        .json({ mensagem: "E-mail e/ou senha inválido(s)." });
    }
    const token = jwt.sign(
      {
        id: user.id,
      },
      jwtSecret,
      {
        expiresIn: "8h",
      }
    );

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    await userValidation.validate(req.body);

    const user = await findUserByEmail(email);

    if (user) {
      return res
        .status(403)
        .json({ message: "email já está sendo utilizado." });
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
      name,
      email,
      password: encryptedPassword,
    });
    if (!newUser) {
      return res.status(400).json({ message: "Usuário não pôde ser criado" });
    }
    return res.status(200).json({ message: "Usuário criado com sucesso." });
  } catch (error: any) {
    return res.status(400).json({ mensagem: error?.message });
  }
};
