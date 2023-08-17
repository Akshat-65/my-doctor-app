import homePageImage from "../assets/homePageImage.svg";
import Box from "@mui/material/Box";
const Doctors = () => {
  return (
    <Box sx={{
        display: { xs: "flex" },
        width: { xs: "100%", md: "80%" }
      }}>
      <Box sx={{width: '100%'}}  
      >
        <img
          src={homePageImage}
          style={{ width: "90%" }}
        />
      </Box>
    </Box>
  );
};

export default Doctors;
