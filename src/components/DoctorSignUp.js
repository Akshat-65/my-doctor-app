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
import { useState, useEffect } from "react";

const formIsValidStyles = {
  color: "#f44336",
  fontSize: "0.80rem",
  marginLeft: "1rem",
  marginBottom: 0,
  marginTop: "0.3rem",
};

const DoctorSignUp = () => {
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const initialState = {
    firstName: "",
    lastName: "",
    gender: "male",
    contactNumber: "",
    email: "",
    password: "",
  };

  const [details, setDetails] = useState(initialState);

  const [formIsValid, setFormIsValid] = useState({
    name: true,
    number: true,
    email: true,
    password: true,
    contactNumberExists: false,
    emailExists: false,
    existsContactError: false,
    existsEmailError: false,
  });

  const passwordInitialState = {
    lowercase: "",
    uppercase: "",
    specialCharacter: "",
    number: "",
    minimumLength: "",
    matching: "",
    isShowing: false,
  };

  const [passwordIsValid, setPasswordIsValid] = useState(passwordInitialState);

  const formValidity =
    formIsValid.name &&
    formIsValid.number &&
    formIsValid.email &&
    formIsValid.password &&
    !formIsValid.contactNumberExists &&
    !formIsValid.emailExists &&
    passwordIsValid.lowercase === "checked" &&
    passwordIsValid.uppercase === "checked" &&
    passwordIsValid.specialCharacter === "checked" &&
    passwordIsValid.number === "checked" &&
    passwordIsValid.minimumLength === "checked" &&
    passwordIsValid.matching === "checked";
  console.log(formValidity);

  const handleNameInput = (e) => {
    console.log(e.target.value);
    let name = e.target.value;
    setName(name);
    let nameArray = name.split(" ");
    let firstName = nameArray[0];
    let lastName = nameArray[1];
    console.log(firstName);
    console.log(lastName);
    setDetails((prev) => ({
      ...prev,
      firstName: firstName,
      lastName: lastName,
    }));
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

  const handleGenderChange = (e) => {
    console.log(e.target.value);
    let gender = e.target.value;
    setDetails((prev) => ({ ...prev, gender: gender }));
  };

  const handleMobileInput = (e) => {
    const contactNumber = e.target.value;
    setDetails((prev) => ({ ...prev, contactNumber: contactNumber }));
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

  const handleEmailInput = (e) => {
    const email = e.target.value;
    setDetails((prev) => ({ ...prev, email: email }));
  };

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
    setDetails((prevState) => ({
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
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    if (confirmPassword === details.password) {
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

  const handlePasswordValidity = (e) => {
    const check = e.target.value.trim() === "" ? false : true;
    console.log(check);

    setFormIsValid((prevState) => ({
      ...prevState,
      password: check,
    }));
  };

  const handleContactNumberExists = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/accounts?contactNumber=${details.contactNumber}`
      );
      const data = await response.json();
      console.log(data.name);
      if (data.name === "account exists") {
        console.log("check");
        setFormIsValid((prevState) => ({
          ...prevState,
          contactNumberExists: true,
          existsContactError: true,
        }));
      } else {
        setFormIsValid((prevState) => ({
          ...prevState,
          contactNumberExists: false,
          existsContactError: false,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleContactNumberExists();
  }, [details.contactNumber]);

  const handleEmailExists = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/accounts?email=${details.email}`
      );
      const data = await response.json();
      console.log(data.name);
      if (data.name === "account exists") {
        console.log("check");
        setFormIsValid((prevState) => ({
          ...prevState,
          emailExists: true,
          existsEmailError: true,
        }));
      } else {
        setFormIsValid((prevState) => ({
          ...prevState,
          emailExists: false,
          existsEmailError: false,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleEmailExists();
  }, [details.email]);

  const handleDoctorFormSubmit = async () => {
    try {
      const response = await fetch("http://my-doctors.net:8090/doctors", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      setDetails(initialState);
      setPasswordIsValid(passwordInitialState);
      setName("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  const requirements = [
    { label: "Must contain lowercase letter.", key: "lowercase" },
    { label: "Must contain uppercase letter.", key: "uppercase" },
    {
      label: "Must contain at least one special character.",
      key: "specialCharacter",
    },
    { label: "Must contain at least one number.", key: "number" },
    { label: "Must contain at least 6 characters.", key: "minimumLength" },
    { label: "Passwords must match.", key: "matching" },
  ];

  const getRequirementIcon = (status) => {
    if (status === "checked") {
      return <CustomCheckCircleOutlineIcon />;
    } else if (status === "unchecked") {
      return <CustomCancelOutlinedIcon />;
    }
    return <CustomRadioButtonUncheckedIcon />;
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
          value={name}
          sx={{ width: "97%" }}
          onChange={handleNameInput}
          onBlur={handleNameValidity}
        />
        {!formIsValid.name && (
          <p style={formIsValidStyles}>Please enter a valid name!</p>
        )}
      </Box>

      <Box>
        <FormLabel id="gender" sx={{ color: "black" }}>
          Gender*
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="gender"
          name="row-radio-buttons-group"
          defaultValue="male"
          onChange={handleGenderChange}
        >
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
      <Box sx={{ mb: "1rem", width: "100%" }}>
        <InputLabel htmlFor="mobile" sx={{ color: "black" }}>
          Mobile Number*
        </InputLabel>
        <OutlinedInput
          id="mobile"
          error={!formIsValid.number || formIsValid.existsContactError}
          placeholder="Enter Mobile Number"
          value={details.contactNumber}
          type="number"
          onChange={handleMobileInput}
          onBlur={handleMobileValidity}
          sx={{ width: "97%" }}
        />
        {!formIsValid.number && !formIsValid.contactNumberExists && (
          <p style={formIsValidStyles}>
            Please enter a valid 10-digit mobile number!
          </p>
        )}
        {formIsValid.contactNumberExists && (
          <p style={formIsValidStyles}>Mobile number already exists!</p>
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
          value={details.email}
          error={!formIsValid.email || formIsValid.existsEmailError}
          onChange={handleEmailInput}
          onBlur={handleEmailValidity}
          sx={{ width: "97%" }}
        />
        {!formIsValid.email && !formIsValid.emailExists && (
          <p style={formIsValidStyles}>Please enter a valid e-mail address!</p>
        )}
        {formIsValid.emailExists && (
          <p style={formIsValidStyles}>Email address already exists!</p>
        )}
      </Box>

      <Box sx={{ mb: "1rem", width: "100%" }}>
        <InputLabel htmlFor="password" sx={{ color: "black" }}>
          Create Password*
        </InputLabel>
        <OutlinedInput
          id="password"
          error={!formIsValid.password}
          placeholder="create password"
          type="password"
          value={details.password}
          onChange={handlePassword}
          onBlur={handlePasswordValidity}
          onClick={handlePasswordRequirements}
          sx={{ width: "97%" }}
        />
        {!formIsValid.password && (
          <p style={formIsValidStyles}>Password cannot be empty!</p>
        )}
      </Box>

      <InputLabel htmlFor="confirmPassword" sx={{ color: "black" }}>
        Confirm Password*
      </InputLabel>
      <OutlinedInput
        id="confirmPassword"
        onChange={handleConfirmPassword}
        value={confirmPassword}
        placeholder="confirm password"
        type="password"
        sx={{ mb: "1rem", width: "97%" }}
      />
      {
        <>
          {passwordIsValid.isShowing === true &&
            requirements.map(({ label, key }) => (
              <Box key={key} sx={{ display: "flex", alignItems: "center" }}>
                {getRequirementIcon(passwordIsValid[key])}
                <Typography
                  variant="body1"
                  component="span"
                  sx={{ fontSize: "0.8rem" }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
        </>
      }

      <Box sx={{ mb: "1rem" }}>
        <Button
          variant="contained"
          disabled={!formValidity}
          onClick={handleDoctorFormSubmit}
        >
          REGISTER
        </Button>
      </Box>
      <Box
        sx={{
          width: "70%",
          mb: "2rem",
        }}
      >
        <Typography
          variant="body1"
          component="span"
          sx={{ fontSize: "1rem", mr: "0.5rem" }}
        >
          Already have an account?
        </Typography>

        <a
          href=""
          style={{ textDecoration: "none", fontWeight: 800, color: "blue" }}
        >
          Sign in
        </a>
      </Box>
    </Box>
  );
};

export default DoctorSignUp;
