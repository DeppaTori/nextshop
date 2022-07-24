import { useState } from "react";
import { fakeAuthProvider } from "./fakeAuthProvider";

export const AuthProvider = ({
  children,
  createProvider,
}: {
  children: React.ReactNode;
  createProvider: Function;
}) => {
  let [user, setUser] = useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return createProvider(value, children);
};
