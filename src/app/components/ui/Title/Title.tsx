import { MainTitle } from "./Title.style";

export interface ITitle {
  textAlign?: string;
  fontSize?: string;
  children?: React.ReactNode;
  margin?: string;
}

const Title = ({ textAlign, fontSize, children, margin }: ITitle) => {
  return (
    <MainTitle fontSize={fontSize} textAlign={textAlign} margin={margin}>
      {children}
    </MainTitle>
  );
};

export default Title;
