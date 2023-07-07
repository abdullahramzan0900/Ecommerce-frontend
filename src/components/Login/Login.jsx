import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import AdbIcon from "@mui/icons-material/Adb";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import './index.css'

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [Responsee, setResponse] = useState("");
  const navigate = useNavigate();
  const [localdata, Setlocaldata] = useState();

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "admin@shopify.com" && password === "admin123") {
      // Admin login successful
      setResponse("Admin login successful");
      localStorage.setItem("admin", name);
      navigate("/admin");
    } else {
      try {
        const response = await fetch("http://localhost:5000/api/login/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            password,
          }),
        });

        if (response.ok) {
          // Login successful
          const data = await response.json();
          setResponse(data);
          console.log(data.name, "name");
          localStorage.setItem("name", data.name);
          if (data.name) {
            navigate("/");
          }
        } else {
          console.log("Login failed");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  const defaultTheme = createTheme();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <ThemeProvider theme={defaultTheme}>
        <Container className="mainn" component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
        
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box  component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handleChange2}
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to={"/ForgetPassword"} variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link variant="body2">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Login;
