import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useState } from "react";

const PatientSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    number: true,
    email: true,
  });

  const [passwordIsValid, setPasswordIsValid] = useState({
    lowercase: "",
    uppercase: "",
    specialCharacter: "",
    number: "",
    minimumLength: "",
    matching: "",
    isShowing: false,
  });

  // const formValidity =
  //   passwordIsValid.lowercase &&
  //   passwordIsValid.uppercase &&
  //   passwordIsValid.specialCharacter &&
  //   passwordIsValid.number &&
  //   passwordIsValid.minimumLength &&
  //   passwordIsValid.matching;
  // console.log(formValidity);
  
  const handleNameInput = (e) => {
    console.log(e.target.value);
    const name = e.target.value;
    setFullName(name);
  };
  const handleNameValidity = (e) => {
    // console.log(e.target.value);
    const check = e.target.value.trim() === "" ? false : true;
    console.log(check);

    setFormIsValid((prevState) => ({
      ...prevState,
      name: check,
    }));
  };
  const handleMobileInput = (e) => {
    const mobileNumber = e.target.value;
    setMobile(mobileNumber);
  };

  const handleMobileValidity = (e) => {
    console.log(e.target.value);
    console.log("mobile");
    const check = e.target.value.trim().length === 10 ? true : false;
    setFormIsValid((prevState) => ({
      ...prevState,
      number: check,
    }));
  };

  const handleEmailInput = () => {};

  const handleEmailValidity = (e) => {
    const value = e.target.value;
    let index1 = value.indexOf(".");
    let index2 = value.indexOf("@");
    const checkIndex = index1 - index2 > 3;
    const isValid =
      value.trim() !== "" &&
      value.includes("@") &&
      (value.includes(".com") || value.includes(".in")) &&
      checkIndex &&
      !value.includes(" ");
    const check = isValid ? true : false;
    setFormIsValid((prevState) => ({
      ...prevState,
      email: check,
    }));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
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
  };

  const handleConfirmPassword = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);
    if (inputValue === password) {
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

  const handlePasswordRequirements = () => {
    setPasswordIsValid((prevState) => ({
      ...prevState,
      isShowing: true,
    }));
  };

  const CustomRadioButtonUncheckedIcon = () => {
    return <RadioButtonUncheckedIcon color="primary" />;
  };

  const CustomCheckCircleOutlineIcon = () => {
    return <CheckCircleOutlineIcon color="success" />;
  };

  const CustomCancelOutlinedIcon = () => {
    return <CancelOutlinedIcon style={{ color: "#f44336" }} />;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        m: "auto",
        width: "90%",
      }}
    >
      <Typography
        variant="h6"
        component="h1"
        sx={{ fontWeight: "700", mb: "1rem", mt: "1rem" }}
      >
        Create an account
      </Typography>
      <Box sx={{ mb: "1rem", width: "100%" }}>
        <InputLabel htmlFor="name" sx={{ fontWeight: "500", color: "black" }}>
          Full Name*
        </InputLabel>
        <OutlinedInput
          id="name"
          placeholder="Enter name"
          error={!formIsValid.name}
          required
          sx={{ width: "97%" }}
          onChange={handleNameInput}
          onBlur={handleNameValidity}
        />
        {!formIsValid.name && (
          <p
            style={{
              color: "#f44336",
              fontSize: "0.80rem",
              marginLeft: "1rem",
            }}
          >
            Please enter a valid name!
          </p>
        )}
      </Box>

      <Box>
        <FormLabel id="gender" sx={{ color: "black" }}>
          Gender*
        </FormLabel>
        <RadioGroup row aria-labelledby="gender" name="row-radio-buttons-group">
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
            sx={{ color: "black" }}
          />
        </RadioGroup>
      </Box>
      <FormLabel id="dob" sx={{ color: "black" }}>
        Date of birth*
      </FormLabel>
      <Box sx={{ mb: "1rem" }}>
        <select
          name=""
          style={{
            marginRight: "15px",
            height: "2rem",
            width: "auto",
            padding: "0.5rem",
          }}
        >
          <option value="day">Day</option>
        </select>
        <select
          style={{
            marginRight: "15px",
            height: "2rem",
            width: "auto",
            padding: "0.5rem",
          }}
        >
          <option>Month</option>
        </select>
        <select
          style={{
            marginRight: "15px",
            height: "2rem",
            width: "auto",
            padding: "0.5rem",
          }}
        >
          <option>Year</option>
        </select>
      </Box>
      <Box sx={{ mb: "1rem", width: "100%" }}>
        <InputLabel htmlFor="mobile" sx={{ color: "black" }}>
          Mobile Number*
        </InputLabel>
        <OutlinedInput
          id="mobile"
          error={!formIsValid.number}
          placeholder="Enter Mobile Number"
          type="number"
          onChange={handleMobileInput}
          onBlur={handleMobileValidity}
          sx={{ width: "97%" }}
        />
        {!formIsValid.number && (
          <p
            style={{
              color: "#f44336",
              fontSize: "0.80rem",
              marginLeft: "1rem",
            }}
          >
            Please enter a valid 10-digit mobile number!
          </p>
        )}
      </Box>
      <Box sx={{ mb: "1rem", width: "100%" }}>
        <InputLabel htmlFor="email" sx={{ color: "black" }}>
          Email*
        </InputLabel>
        <OutlinedInput
          id="email"
          placeholder="abc@gmail.com"
          type="email"
          error={!formIsValid.email}
          onChange={handleEmailInput}
          onBlur={handleEmailValidity}
          sx={{ width: "97%" }}
        />
        {!formIsValid.email && (
          <p
            style={{
              color: "#f44336",
              fontSize: "0.80rem",
              marginLeft: "1rem",
            }}
          >
            Please enter a valid e-mail address!
          </p>
        )}
      </Box>

      <InputLabel htmlFor="password" sx={{ color: "black" }}>
        Create Password*
      </InputLabel>
      <OutlinedInput
        id="password"
        placeholder="create password"
        type="password"
        onChange={handlePassword}
        onClick={handlePasswordRequirements}
        sx={{ mb: "1rem", width: "97%" }}
      />
      <InputLabel htmlFor="confirmPassword" sx={{ color: "black" }}>
        Confirm Password*
      </InputLabel>
      <OutlinedInput
        id="confirmPassword"
        onChange={handleConfirmPassword}
        placeholder="confirm password"
        type="password"
        sx={{ mb: "1rem", width: "97%" }}
      />
      <Box>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.lowercase === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.lowercase === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Must contain lowercase letter.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.uppercase === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.uppercase === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Must contain uppercase letter.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.specialCharacter === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.specialCharacter === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Must contain at least one special character.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.number === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.number === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Must contain at least one number.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.minimumLength === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.minimumLength === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Must contain at least 6 characters.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box sx={{ mb: "1rem" }}>
        {passwordIsValid.isShowing === true ? (
          <>
            {passwordIsValid.matching === "" ? (
              <CustomRadioButtonUncheckedIcon />
            ) : passwordIsValid.matching === "checked" ? (
              <CustomCheckCircleOutlineIcon />
            ) : (
              <CustomCancelOutlinedIcon />
            )}
            <Typography variant="body1" component="span">
              Passwords must match.
            </Typography>
          </>
        ) : null}
      </Box>

      <Box sx={{ mb: "1rem" }}>
        <Button variant="contained" disabled>
          REGISTER
        </Button>
      </Box>
      <Box
        sx={{
          width: "70%",
          mb: "2rem",
        }}
      >
        Already have an account?
        <a href="">Sign in</a>
      </Box>
    </Box>
  );
};

export default PatientSignUp;
