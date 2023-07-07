import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
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
import './index.css';

function ForgetPassword() {
  const [name, setname] = useState("");
  const [respons, setresponse] = useState();
  const [response, setresponsee] = useState();
  const [status, setstatus] = useState(false);
  const [password, setpassword] = useState("");
  const [randomnum, setrandomnum] = useState();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setname(event.target.value);
    console.log(name);
  };

  
  async function forgetpassmail() {
    const result = await fetch("http://localhost:5000/forgetpassmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    }).then((response) => response.json());
    setresponse(result);

    setstatus(true);
  }
  console.log(respons, "aaaaaa");
  async function forgetpass() {
    const result = await fetch("http://localhost:5000/api/forget-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        randomnum,
        password,
      }),
    }).then((response) => response.json());
    setresponsee(result);
    console.log(result, "result")
  }

  const handleChange2 = (event) => {
    setpassword(event.target.value);
    console.log(password);
  };
  const handleChange3 = (event) => {
    setrandomnum(event.target.value);
    console.log(password);
  };
  console.log(response?.status, "resonse");



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
      <div className="pass-main">
          



      <Container component="main" maxWidth="xs">
      <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box component="form" noValidate sx={{ mt: 1 }}>
        {!status && (

          <div className="forget-pass" >
         <Typography style={{
          textAlign:'center'
         }} component="h1" variant="h5">
          Forget Password
            </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField className="texttfield"

              margin="normal"
              required
              fullWidth
              autoFocus
              label="Email"
              value={name}
              onChange={handleChange}

            />
            <Button className="buttonn"
              onClick={() => {
                forgetpassmail();
              }}
            >
              Send mail
            </Button>

          </Box>
          </div>
        )}

        {status && (
          <div class="forget-pass">
            <TextField
              label="Email"

              required

              margin="normal"

              fullWidth
              autoFocus
              value={name}
              onChange={handleChange}
            />
            <br />
            <TextField className="texttfield"
              label="Enter verification number" 
              margin="normal"
              required
              fullWidth
              autoFocus
              value={randomnum}
              onChange={handleChange3}  
            />
            <div>
              <TextField className="texttfield"
                label="New password"
                margin="normal"
                required
                fullWidth
                autoFocus
                value={password}
                onChange={handleChange2}
              />
              <br></br>
              <Button className="buttonn"
                 type="submit"
                 fullWidth
                 variant="contained"
                 sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  forgetpass();
                  if (response?.status) {
                    navigate('/Login')
                  }
                  else {

                  }
                }}
              >
              Change Password
              </Button>
            </div>
          </div>
        )}
        </Box>
</Box>
      </Container>
      </div>
    </>
  );
}
export default ForgetPassword;
