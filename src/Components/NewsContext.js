import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { SearchContext } from "./SearchBar";
export const NewsContext = createContext();

const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "78750f4caeb34874bbb2101984a521a3";
  const searchList = useContext(SearchContext);
  const { q, sortBy, lang, page } = searchList;
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
    // axios
    //   .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    //   .then((response) => setData(response.data))
    //   .catch((error) => console.log(error));
  }, [searchList]);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
