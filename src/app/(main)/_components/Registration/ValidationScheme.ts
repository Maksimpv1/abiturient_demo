import * as yup from "yup";

export const ValidityState = yup.object().shape({
    idNumber: yup
      .string()
      .typeError("Введите верный Id")
      .required("Обязательное поле"),
    firstName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    lastName: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    email: yup
      .string()
      .email("Введите верный Email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле")
      .min(8, "Min 8 symbols"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
  });