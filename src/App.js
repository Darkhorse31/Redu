import react from "react";
import "./App.scss";
import Header from "./components/Header/index";
import MovieDeatail from "./components/MovieDetail/index";
import Footer from "./components/Footer/index";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PagesNot/index"
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:imdbID" element={<MovieDeatail />}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
