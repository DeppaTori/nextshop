import { useState } from "react";
import { API_URL } from "../../helpers/constant";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (email.length === 0) {
      setErrMsg("Please enter your email address");
    } else if (!validateEmail(email)) {
      setErrMsg("Please enter valid email address");
    } else if (password.length === 0) {
      setErrMsg("Please enter your password");
    } else if (password.length < 8) {
      setErrMsg("Password must be 8 characters or more");
    } else {
      setErrMsg("");
      setIsLoading(true);
      const fetchData = async () => {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password: password }),
        });
        const json = await response.json();
        if (!json.success) {
          setErrMsg("Username or password is incorrect.");
        }
        setIsLoading(false);
      };
      fetchData();
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
      {errMsg.length > 0 && <p>{errMsg}</p>}
      {isLoading && <p>Loading...</p>}

      <form role="form" onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="login" />
      </form>
    </>
  );
};
