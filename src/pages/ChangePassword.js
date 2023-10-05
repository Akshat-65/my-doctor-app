import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const changePasswordHeaderWrapper = {
  display: "flex",
  alignItems: "center",
  mb: "1rem",
};

const changePasswordStyle = {
  color: "#3f51b5",
  fontSize: { xs: "26px", md: "30px", lg: "36px" },
  fontWeight: "bold",
};
const ChangePassword = () => {
  const drawerWidth = 240;

  const user = JSON.parse(localStorage.getItem("userContext"));
  console.log(user);
  const id = user.user._id;
  const accessToken = user.accessToken;

  const passwordInitialState = {
    lowercase: "",
    uppercase: "",
    specialCharacter: "",
    number: "",
    minimumLength: "",
    matching: "",
  };

  const [passwordIsValid, setPasswordIsValid] = useState(passwordInitialState);
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const passwordRequirements = [
    { label: "A lowercase letter.", key: "lowercase" },
    { label: "An uppercase letter.", key: "uppercase" },
    {
      label: "At least one special character.",
      key: "specialCharacter",
    },
    { label: "At least one number.", key: "number" },
    { label: "At least six characters.", key: "minimumLength" },
    { label: "Passwords must match.", key: "matching" },
  ];

  const getRequirementIcon = (status) => {
    if (status === "checked") {
      return <CustomRadioButtonCheckedIcon />;
    } else {
      return <CustomRadioButtonCrossIcon />;
    }
  };

  const CustomRadioButtonCheckedIcon = () => {
    return <CheckIcon color="success" fontSize="small" />;
  };

  const CustomRadioButtonCrossIcon = () => {
    return <CloseIcon color="error" fontSize="small" />;
  };

  let samePassword = false;
  if (passwordDetails.currentPassword === passwordDetails.password) {
    samePassword = true;
  }

  const formValidity =
    passwordDetails.currentPassword &&
    passwordIsValid.lowercase === "checked" &&
    passwordIsValid.uppercase === "checked" &&
    passwordIsValid.specialCharacter === "checked" &&
    passwordIsValid.number === "checked" &&
    passwordIsValid.minimumLength === "checked" &&
    passwordIsValid.matching === "checked" &&
    !samePassword;

  const handleCurrentPassword = (e) => {
    const value = e.target.value;
    setPasswordDetails((prevState) => ({
      ...prevState,
      currentPassword: value,
    }));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPasswordDetails((prevState) => ({
      ...prevState,
      password: value,
    }));
    // setPassword(value);
    console.log(value);

    if (value.trim().length < 6) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        minimumLength: "unchecked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        minimumLength: "checked",
      }));
    }
    console.log(/[a-z]/.test(value));

    if (/[a-z]/.test(value)) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        lowercase: "checked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        lowercase: "unchecked",
      }));
    }

    if (/[A-Z]/.test(value)) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        uppercase: "checked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        uppercase: "unchecked",
      }));
    }

    if (/[0-9]/.test(value)) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        number: "checked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        number: "unchecked",
      }));
    }

    if (/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(value)) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        specialCharacter: "checked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        specialCharacter: "unchecked",
      }));
    }

    setPasswordIsValid((prevState) => ({
      ...prevState,
      matching: "unchecked",
    }));
  };

  const handleConfirmPassword = (e) => {
    let confirmPassword = e.target.value;
    setPasswordDetails((prevState) => ({
      ...prevState,
      confirmPassword: confirmPassword,
    }));
    if (confirmPassword === passwordDetails.password) {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        matching: "checked",
      }));
    } else {
      setPasswordIsValid((prevState) => ({
        ...prevState,
        matching: "unchecked",
      }));
    }
  };

  const handleChangePasswordSubmit = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/patients/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            oldPassword: passwordDetails.currentPassword,
            newPassword: passwordDetails.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      console.log("changed successfully");
      setShowAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ display: "flex", mt: { xs: "12rem", md: "9rem" } }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Box
          component="section"
          sx={{ pl: "1rem", pr: "1rem", ml: { md: "30%" }, mt: { md: "3%" } }}
        >
          {showAlert && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
              
                width: { xs: "92%", md: "48%" },
                mb:"20px"
              }}
            >
              <Alert severity="success" sx={{ width: "100%", mt: "1rem" }}>
                Password changes successfully
              </Alert>
            </Box>
          )}

          <Box sx={changePasswordHeaderWrapper}>
            <Typography variant="h4" sx={changePasswordStyle}>
              Change Password
            </Typography>
          </Box>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <TextField
              id="outlined-basic"
              label="Current Password*"
              variant="outlined"
              type="password"
              onChange={handleCurrentPassword}
              value={passwordDetails.currentPassword}
              sx={{ maxWidth: "500px" }}
            />
            <TextField
              id="outlined-basic"
              label="New Password*"
              variant="outlined"
              type="password"
              onChange={handlePassword}
              value={passwordDetails.password}
              sx={{ maxWidth: "500px" }}
            />
            <TextField
              id="outlined-basic"
              label="Confirm Password*"
              variant="outlined"
              type="password"
              onChange={handleConfirmPassword}
              sx={{ maxWidth: "500px" }}
            />
            <Box>
              {passwordRequirements.map(({ label, key }) => (
                <Box
                  key={key}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    mt: "4px",
                    mb: "4px",
                  }}
                >
                  {getRequirementIcon(passwordIsValid[key])}
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {label}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ mb: "1rem" }}>
              <Button
                variant="contained"
                disabled={!formValidity}
                sx={{
                  backgroundColor: "rgb(63, 81, 181)",
                  width: { xs: "100%", sm: "48%" },
                }}
                onClick={handleChangePasswordSubmit}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChangePassword;
