import { ILoginData } from "../login/loginData";

export const registration: ILoginData[] = [
  {
    label: "Номер студенческого",
    type: "text",
    name: "idNumber",
  },
  {
    label: "Имя",
    type: "text",
    name: "firstName",
  },
  {
    label: "Фамилия",
    type: "text",
    name: "lastName",
  },
  {
    label: "Почта",
    type: "email",
    name: "email",
  },
  {
    label: "Пароль",
    type: "password",
    name: "password",
  },
  {
    label: "Повторите пароль",
    type: "password",
    name: "confirmPassword",
  },
];
