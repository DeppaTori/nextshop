import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./modules/home/HomePage";
import { MyCartPage } from "./modules/cart/MyCartPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
      </Routes>
    </>
  );
}

export default App;
