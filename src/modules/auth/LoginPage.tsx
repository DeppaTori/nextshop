import "./LoginPage.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../helpers/constant";
import { validateEmail } from "../../helpers/mixin";

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

  return (
    <Container>
      <Link to="/">Nextshop</Link>

      {isLoading && <p>Loading...</p>}
      <Box sx={{ width: "100%" }}>
        <Stack>
          <Card sx={{ minWidth: 275, maxWidth: 300 }}>
            <CardContent>
              <form role="form" onSubmit={handleSubmit}>
                <h2 className="LoginPage-heading">Login</h2>
                <p className="LoginPage-slogan">
                  Shopping with cool stuff today
                </p>
                {errMsg.length > 0 && (
                  <p className="LoginPage-errmsg">{errMsg}</p>
                )}
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <br />
                <TextField
                  name="password"
                  type="password"
                  label="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ marginBottom: 2 }}
                />
                <br />

                <Button variant="contained" type="submit">
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Container>
  );
};
