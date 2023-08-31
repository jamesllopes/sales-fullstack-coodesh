import yup from "../config/yup";

export const userValidation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório."),
  email: yup.string().email().required("O email é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatório.")
    .min(6)
    .trim("Somente caracteres válidos são permitidos no campo senha"),
});
