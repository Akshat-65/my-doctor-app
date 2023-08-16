import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { useState } from "react";

const DoctorSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameInput = (e) => {
    console.log(e.target.value);
    const name = e.target.value;
    setFullName(name);
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

      <InputLabel htmlFor="name" sx={{ fontWeight: "500", color: "black" }}>
        Full Name*
      </InputLabel>
      <OutlinedInput
        id="name"
        placeholder="Enter name"
        required
        sx={{ mb: "1rem", width: "97%" }}
        onChange={handleNameInput}
      />
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
      <InputLabel htmlFor="mobile" sx={{ color: "black" }}>
        Mobile Number*
      </InputLabel>
      <OutlinedInput
        id="mobile"
        placeholder="Enter Mobile Number"
        type="number"
        sx={{ mb: "1rem", width: "97%" }}
      />
      <InputLabel htmlFor="email" sx={{ color: "black" }}>
        Email*
      </InputLabel>
      <OutlinedInput
        id="email"
        placeholder="abc@gmail.com"
        type="email"
        sx={{ mb: "1rem", width: "97%" }}
      />
      <InputLabel htmlFor="password" sx={{ color: "black" }}>
        Create Password*
      </InputLabel>
      <OutlinedInput
        id="password"
        placeholder="create password"
        type="password"
        sx={{ mb: "1rem", width: "97%" }}
      />
      <InputLabel htmlFor="confirmPassword" sx={{ color: "black" }}>
        Confirm Password*
      </InputLabel>
      <OutlinedInput
        id="confirmPassword"
        placeholder="confirm password"
        type="password"
        sx={{ mb: "1rem", width: "97%" }}
      />
      <Box sx={{heigth:"10px", width: "97%" }}>
        <RadioButtonUncheckedIcon/>
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

export default DoctorSignUp;
