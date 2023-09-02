import yup from "../config/yup";

export const validationSignin = yup.object().shape({
  email: yup.string().email().required("O campo e-mail é obrigatório."),
  senha: yup.string().required("O campo senha é obrigatório."),
});
