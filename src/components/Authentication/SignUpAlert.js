import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

// ------------------------------------styles----------------------------------------

const alertWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  m: "auto",
  width: "90%",
};

const alertStyles = { width: "90%", mt: "1rem" };

// ------------------------------------component----------------------------------------

const SignUpAlert = () => {
  return (
    <>
      <Box sx={alertWrapperStyles}>
        <Alert severity="success" sx={alertStyles}>
          Signed up successfully!
        </Alert>
      </Box>
    </>
  );
};

export default SignUpAlert;
