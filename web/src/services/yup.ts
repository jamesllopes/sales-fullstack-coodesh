import * as yup from "yup";

export const signinSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Insira o email")
    .email("Insira um email válido"),
  password: yup.string().trim().required("Insira sua senha"),
});
