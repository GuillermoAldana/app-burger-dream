import * as Yup from 'yup';

export const validationRegister = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Su nombre es muy corto')
      .max(50, 'Su nombre es muy largo')
      .required('Este campo es requerido'),
    email: Yup.string().email('Email invalido').required('Este campo es requerido'),
    password: Yup.string()
      .min(6, 'El minimo de caracteres permitido es de 6.')
      .required('Este campo es requerido'),
  });
  export const validationLogin = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Este campo es requerido'),
    password: Yup.string().required('Este campo es requerido'),
  });
