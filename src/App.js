import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import SearchResults from "./Components/SearchResults";
import AllResults from "./Components/AllResults";
import Search from "./Components/Search";
function App() {
  return (
    <>
      <Header />
      <Search />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<AllResults />} />
          <Route path="/search/:city" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
