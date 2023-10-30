import Button from "@mui/material/Button";

const buttonStyles = {
  color: "white",
  backgroundColor: "#3f51b5",
  height: "40px",
};

const CustomButton = ({ label, onClick, disabled }) => {
  return (
    <Button
      sx={buttonStyles}
      variant="contained"
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
