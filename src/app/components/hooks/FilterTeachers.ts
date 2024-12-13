import { ITeacherData } from "@/app/components/moc/TeacherData";
import { normalizeString } from "./NormalizeString";

const filterTeachers = (data: ITeacherData[], value: string) => {
  const normalValue = normalizeString(value);
  const searchTerms = normalValue
    .split(/\s+/)
    .filter((item: string) => item.length > 0);

  return data.filter((teacher) => {
    const firstName = normalizeString(teacher.firstName);
    const secondName = normalizeString(teacher.secondName);
    const lastName = normalizeString(teacher.lastName);

    return searchTerms.every(
      (item: string) =>
        firstName.includes(item) ||
        secondName.includes(item) ||
        lastName.includes(item),
    );
  });
};

export default filterTeachers;
