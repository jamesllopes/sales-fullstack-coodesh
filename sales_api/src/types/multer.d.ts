declare module "multer" {
  import { RequestHandler } from "express";

  interface File extends Express.Multer.File {} // Isso estende o tipo File do multer para evitar erros de tipo

  function multer(options?: any): RequestHandler;

  export = multer;
}
