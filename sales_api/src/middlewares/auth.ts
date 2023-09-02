import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/jwtSecret";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

export const authToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      mensagem:
        "Para acessar este recurso um token de autenticação válido deve ser enviado.",
    });
  }

  const [, token] = authorization?.split("Bearer ");

  if (!token) {
    return res.status(401).json({
      mensagem:
        "Para acessar este recurso um token de autenticação válido deve ser enviado.",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);

    if (typeof decoded === "object" && "id" in decoded) {
      req.user = {
        id: decoded.id,
      };
    } else {
      throw new Error("Token inválido.");
    }

    return next();
  } catch {
    return res.status(401).json({ mensagem: "Token inválido." });
  }
};
