import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
    console.log(result,"result")    
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
      {!status && (
        <div>
          <TextField
            label="Email"
            variant="filled"
            required
            value={name}
            onChange={handleChange}
          />
          <Button
            onClick={() => {
              forgetpassmail();
            }}
          >
            Send mail
          </Button>
        </div>
      )}

      {status && (
        <div>
          <TextField
            label="Email"
            variant="filled"
            required
            value={name}
            onChange={handleChange}
          />
          <br />
          <TextField
            label="Enter verification number"
            variant="filled"
            required
            value={randomnum}
            onChange={handleChange3}
          />
          <div>
            <TextField
              label="New password"
              variant="filled"
              required
              value={password}
              onChange={handleChange2}
            />
            <br></br>
            <Button
              onClick={() => {
                forgetpass();
           if(response?.status) {
            navigate('/Login')
           }
           else {
          
           }
              }}
            >
              Change-password
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
export default ForgetPassword;
