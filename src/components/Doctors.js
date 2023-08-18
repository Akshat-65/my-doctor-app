import { Typography } from "@mui/material";
import homePageImage from "../assets/homePageImage.svg";
import Box from "@mui/material/Box";

const Doctors = () => {
  return (
    <>
      <img src={homePageImage} style={{ width: "100%", paddingLeft: "1rem" }} />
      <Box component="section">
        <Box  >
          <Typography variant = 'h4'>20+ Specialities</Typography></Box>
      </Box>
      <Box>
        
      </Box>
    </>
  );
};

export default Doctors;
