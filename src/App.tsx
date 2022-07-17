import "./App.css";
import { Routes, Route } from "react-router-dom";

import { MyCart } from "./modules/cart/MyCart";
import { HomePage } from "./modules/home/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<MyCart />} />
      </Routes>
    </div>
  );
}

export default App;
