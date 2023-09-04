import styles from "./LogInForm.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogInForm = () => {
  // const initialState = {
  //   contactNumber:'',
  //   email: "",
  //   password: "",
  //   strategy: "local",
  // };

  const initialState = {
    input: "",
    password: "",
  };

  const [logInDetails, setLogInDetails] = useState({ initialState });

  const navigate = useNavigate();

  const handleLogInInput = (e) => {
    setLogInDetails((prevState) => ({ ...prevState, input: e.target.value }));
  };

  const handlePassword = (e) => {
    setLogInDetails((prevState) => ({ ...prevState, password: e.target.value }));
  };


  const logInData = {password:logInDetails.password};


  const handleLogIn = async()=>{

    if(!isNaN(+logInDetails.input)){
      console.log("number");
      logInData.contactNumber = logInDetails.input
      logInData.strategy = "local-mobile"
      }
      else{
        logInData.email = logInDetails.input
        logInData.strategy = "local"
      }
      console.log(logInData);

    try {
      const response = await fetch("http://my-doctors.net:8090/authentication", {
        method: "POST",
        body: JSON.stringify(logInData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      setLogInDetails(initialState);

      if(data.user){
        localStorage.setItem('userContext', JSON.stringify(data));
        navigate('/');
      }


      // setPasswordIsValid(passwordInitialState);
      // setName("");
      // setConfirmPassword("");
      // setShowAlert(true);
    } catch (error) {
      // setShowAlert(false);
      console.log(error);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // mt:'12rem'
      }}
    >
      <TextField
        onChange={handleLogInInput}
        value={logInDetails.input}
        fullWidth
        required
        label="Email or Mobile Number"
        id="fullWidth"
        sx={{ mb: "2rem", mt: "1.1rem", width: "70%" }}
      />
      <TextField
        fullWidth
        label="Password"
        required
        type="password"
        value={logInDetails.password}
        onChange={handlePassword}
        id="fullWidth"
        sx={{ mb: "2rem", width: "70%" }}
      />

      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
        }}
      >
        <Button variant="contained" href="#contained-buttons"  onClick={handleLogIn}>
          Log In
        </Button>
        <a
          href=""
          style={{ textDecoration: "none", fontWeight: 800, color: "blue" }}
        >
          Forgot Password?
        </a>
      </Box>
      <Box
        sx={{
          m: 4,
          width: "70%",
        }}
      >
        Don't have an account?
        <a
          href=""
          style={{ textDecoration: "none", fontWeight: 800, color: "blue" }}
        >
          Sign up
        </a>
      </Box>
    </Box>
  );
};

export default LogInForm;
