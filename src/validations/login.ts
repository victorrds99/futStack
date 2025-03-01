import * as yup from 'yup';

export const schema = () => {
  const validation = yup.object({
    email: yup.string().required('Campo obrigatório').email(),
    password: yup.string().required('Campo obrigatório'),
  }).required();

  return validation;
};
