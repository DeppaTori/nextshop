import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, AuthContextType } from "./helpers";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
