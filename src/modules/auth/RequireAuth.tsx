import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContextType } from "./helpers";

export const RequireAuth = ({
  children,
  context,
}: {
  children: JSX.Element;
  context: React.Context<AuthContextType>;
}) => {
  let auth = useContext(context);
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
