import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("Sincan");
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&mode=json&mode=xml&appid=ae4d6493bdbf5765d102b1ef0f3507b8`
      )
      .then((res) => setData(res.data));
  }, [search]);
  const values = {
    search,
    setSearch,
    data,
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
export default SearchContext;
