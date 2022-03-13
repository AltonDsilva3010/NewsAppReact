import "./App.css";
import Header from "./Components/Header";
import News from "./Components/News";
import NewsContextProvider from "./Components/NewsContext";
import SearchBar from "./Components/SearchBar";
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar>
        <NewsContextProvider>
          <News />
        </NewsContextProvider>
      </SearchBar>
    </div>
  );
}

export default App;
