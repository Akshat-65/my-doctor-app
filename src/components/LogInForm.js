import styles from "./LogInForm.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const LogInForm = () => {
  const handleInput = () => [];

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
        onChange={handleInput}
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
        <Button variant="contained" href="#contained-buttons">
          Log In
        </Button>
        <a href="">Forgot Password?</a>
      </Box>
      <Box
        sx={{
          m: 4,
          width: "70%",
        }}
      >
        Don't have an account?
        <a href="">Sign up</a>
      </Box>
    </Box>
  );
};

export default LogInForm;
