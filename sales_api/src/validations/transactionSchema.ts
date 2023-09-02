import yup from "../config/yup";

export const transactionValidation = yup.object().shape({
  type: yup.number().required("O tipo é obrigatório."),
  date: yup.date().required("A data é obrigatória"),
  product: yup.string().required("A descrição é obrigatória."),
  value: yup.number().required("O valor é obrigatório."),
  seller: yup.string().required("O nome do vendedor é obrigatório."),
});
