import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
