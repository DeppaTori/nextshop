import "./App.css";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "./modules/home/HomePage";
import { MyCartPage } from "./modules/cart/MyCartPage";
import { createContext, ReactNode } from "react";
import { AuthContextType } from "./modules/auth/helpers";
import { AuthProvider } from "./modules/auth/AuthProvider";
import { RequireAuth } from "./modules/auth/RequireAuth";
import { LoginPage } from "./modules/auth/LoginPage";

let AuthContext = createContext<AuthContextType>(null!);

const createProvider = (value: AuthContextType, children: ReactNode) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const ProtectedPage = () => <p>Protected Page</p>;

function App() {
  return (
    <AuthProvider createProvider={createProvider}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-cart" element={<MyCartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth context={AuthContext}>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
