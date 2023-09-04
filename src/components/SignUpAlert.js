import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";

const SignUpAlert = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          m: "auto",
          width: "90%",
        }}
      >
        <Alert severity="success" sx={{ width: "90%", mt: "1rem" }}>
          Signed up successfully!
        </Alert>
      </Box>
    </>
  );
};

export default SignUpAlert;
