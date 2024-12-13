import { useState } from "react";
import * as SC from "./Search.style";

interface ISearch {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: ISearch) => {
  const [value, setValue] = useState<string>(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(event);
  };

  return (
    <>
      <SC.SearchInput type={"text"} value={value} onChange={handleChange} />
    </>
  );
};

export default Search;
