export const calculateAverage = (marks: string[]) => {
  const validMarks = marks.filter(
    (item) => item !== "" && !isNaN(parseFloat(item)),
  );
  if (validMarks.length === 0) return "—";
  const sum = validMarks.reduce((arr, value) => arr + parseFloat(value), 0);
  return (sum / validMarks.length).toFixed(1);
};
