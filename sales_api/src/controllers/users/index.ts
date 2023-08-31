import { Request, Response } from "express";
import { userValidation } from "../../validations/signupSchema";

export const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
  } catch (error: any) {
    return res.status(400).json({ mensagem: error.message });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    await userValidation.validate(req.body);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};
