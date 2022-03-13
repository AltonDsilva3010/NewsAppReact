import React, { useState, createContext } from "react";
import "./SearchBar.css";

export const SearchContext = createContext();
const SearchBar = (props) => {
  const [searchList, setSearchList] = useState({
    q: "tesla",
    sortBy: "relevancy",
    page: "",
    lang: "en",
  });

  const [newList, setNewList] = useState({
    q: "",
    sortBy: "relevancy",
    page: "",
    lang: "en",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchList(newList);
    console.log(searchList);
  };

  return (
    <SearchContext.Provider value={searchList}>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          id="topic"
          type="text"
          value={newList.q}
          onChange={(e) => setNewList({ ...newList, q: e.target.value })}
        ></input>
        <label htmlFor="topic">Enter Topic</label>
        <button type="submit">Submit</button>
      </form>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchBar;
