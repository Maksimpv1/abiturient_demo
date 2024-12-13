export interface ILoginData {
  label: string;
  type: string;
  name: string;
}

export const loginData: ILoginData[] = [
  {
    label: "Номер студенческого",
    type: "text",
    name: "idNumber",
  },
  {
    label: "Пароль",
    type: "password",
    name: "password",
  },
];
