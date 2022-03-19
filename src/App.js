import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div class="bodyy">
      <Header />
      {/* <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <Home />
    </div>
  );
}

export default App;
