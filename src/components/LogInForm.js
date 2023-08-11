import styles from "./LogInForm.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const LogInForm = () => {
  return (
    <Box
      className={styles.wrapper}
      sx={{ boxShadow: 2, pl: 4, pr: 6, pt: 2, pb: 2 }}
    >
      <TextField
        fullWidth
        label="Email or Mobile Number*"
        id="fullWidth"
        className={styles.input}
        sx={{ mb:4}}
      />
      <TextField
        fullWidth
        label="Password"
        id="fullWidth"
        className={styles.input}
        sx={{ mb:4}}
      />

      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          ml:2,
          mr:-2
        }}
      >
        <Button variant="contained" href="#contained-buttons">
          Log In
        </Button>
        <a href="">Forgot Password</a>
      </Box>
      <Box sx={{ m: 4 }}>
        Don't have an account?
        <a href="">Sign up</a>
      </Box>
    </Box>
  );
};

export default LogInForm;
