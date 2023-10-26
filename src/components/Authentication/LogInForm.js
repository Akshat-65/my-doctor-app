import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// ------------------------------------styles----------------------------------------

const alertWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  m: "auto",
  width: "70%",
};

const inputWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // mt:'12rem'
};

const emailContactStyles = { mb: "2rem", mt: "1.1rem", width: "70%" };
const passwordStyles = { mb: "2rem", width: "70%" };

const buttonWrapper = {
  display: { xs: "flex" },
  justifyContent: "space-between",
  alignItems: "center",
  width: "70%",
};

const textStyle = { fontWeight: 500, color: "blue" };
const bottomTextStyle = { fontWeight: 800, color: "blue" };
const bottomTextWrapperStyle = { m: 4, width: "70%" };

// ------------------------------------component----------------------------------------

const LogInForm = () => {
  const initialState = {
    input: "",
    password: "",
  };

  const [logInDetails, setLogInDetails] = useState({ initialState });
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const handleLogInInput = (e) => {
    setLogInDetails((prevState) => ({ ...prevState, input: e.target.value }));
  };

  const handlePassword = (e) => {
    setLogInDetails((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const logInData = { password: logInDetails.password };

  const handleLogIn = async () => {
    if (!isNaN(+logInDetails.input)) {
      // console.log("number");
      logInData.contactNumber = logInDetails.input;
      logInData.strategy = "local-mobile";
    } else {
      logInData.email = logInDetails.input;
      logInData.strategy = "local";
    }
    console.log(logInData);

    try {
      const response = await fetch(
        "http://my-doctors.net:8090/authentication",
        {
          method: "POST",
          body: JSON.stringify(logInData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.name === "NotAuthenticated") {
        setShowAlert(true);
      }
      console.log(data.name);

      if (data.user) {
        localStorage.setItem("userContext", JSON.stringify(data));
        setShowAlert(false);
        navigate("/");
      }
    } catch (error) {
      setShowAlert(false);
      console.log(error);
    }
  };

  return (
    <>
      {showAlert && (
        <Box sx={alertWrapperStyles}>
          <Alert severity="error" sx={{ width: "100%", mt: "1rem" }}>
            Mobile Number/Email or password is incorrect. Please try again.
          </Alert>
        </Box>
      )}
      <Box sx={inputWrapperStyles}>
        <TextField
          label="Email or Mobile Number"
          id="fullWidth"
          fullWidth
          required
          inputProps={{ maxLength: 10 }}
          onChange={handleLogInInput}
          value={logInDetails.input}
          sx={emailContactStyles}
        />
        <TextField
          label="Password"
          type="password"
          id="fullWidth"
          fullWidth
          required
          value={logInDetails.password}
          onChange={handlePassword}
          sx={passwordStyles}
        />

        <Box sx={buttonWrapper}>
          <Button
            variant="contained"
            href="#contained-buttons"
            onClick={handleLogIn}
          >
            Log In
          </Button>
          <a href="" style={textStyle}>
            Forgot Password?
          </a>
        </Box>
        <Box sx={bottomTextWrapperStyle}>
          Don't have an account?
          <a href="" style={bottomTextStyle}>
            Sign up
          </a>
        </Box>
      </Box>
    </>
  );
};

export default LogInForm;
