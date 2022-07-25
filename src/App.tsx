import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./modules/home/HomePage";
import { MyCartPage } from "./modules/cart/MyCartPage";
import { AuthProvider } from "./modules/auth/AuthProvider";
import { RequireAuth } from "./modules/auth/RequireAuth";
import { LoginPage } from "./modules/auth/LoginPage";
import { CheckoutPage } from "./modules/checkout/CheckoutPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
