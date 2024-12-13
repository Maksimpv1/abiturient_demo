export interface IMarks {
  semOne: string;
  semTwo: string;
  semTree: string;
  semFour: string;
}

export type ProfileKeysType =
  | "cursesFir"
  | "cursesSec"
  | "cursesThr"
  | "cursesFou";

export interface SemesterData {
  semOne: string;
  semTwo: string;
  semTree: string;
  semFour: string;
}
export interface ICursesData {
  [subject: string]: SemesterData;
}
export type IRowDataType = {
  [key in ProfileKeysType]: ICursesData;
};
export const columnName: string[] = [
  "Предмет",
  "Сем 1",
  "Сем 2",
  "Сем 3",
  "Сем 4",
  "Средний балл",
];

export const columnNameMobile: string[] = [
  "Пр.",
  "Сем 1",
  "Сем 2",
  "Сем 3",
  "Сем 4",
  "Ср. б.",
];

export const rowData: IRowDataType = {
  cursesFir: {
    Математика: { semOne: "9", semTwo: "8", semTree: "8", semFour: "4" },
    Физкультура: { semOne: "9", semTwo: "8", semTree: "8", semFour: "4" },
    Физика: { semOne: "7", semTwo: "7", semTree: "7", semFour: "3" },
    Английский: { semOne: "4", semTwo: "4", semTree: "5", semFour: "6" },
  },
  cursesSec: {
    Математика: { semOne: "10", semTwo: "8", semTree: "8", semFour: "10" },
    Физкультура: { semOne: "10", semTwo: "8", semTree: "8", semFour: "10" },
    Физика: { semOne: "10", semTwo: "10", semTree: "7", semFour: "10" },
    Английский: { semOne: "10", semTwo: "10", semTree: "5", semFour: "10" },
  },
  cursesThr: {
    Математика: { semOne: "4", semTwo: "4", semTree: "5", semFour: "" },
    Физкультура: { semOne: "4", semTwo: "4", semTree: "5", semFour: "" },
    Физика: { semOne: "4", semTwo: "4", semTree: "3", semFour: "" },
    Английский: { semOne: "4", semTwo: "4", semTree: "5", semFour: "" },
  },
  cursesFou: {
    Математика: { semOne: "", semTwo: "", semTree: "", semFour: "" },
    Физкультура: { semOne: "", semTwo: "", semTree: "", semFour: "" },
    Физика: { semOne: "", semTwo: "", semTree: "", semFour: "" },
    Английский: { semOne: "", semTwo: "", semTree: "", semFour: "" },
  },
};
