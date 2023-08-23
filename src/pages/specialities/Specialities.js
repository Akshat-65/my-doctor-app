import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import Speciality from "../../components/Speciality";



const Specialities = () => {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Speciality/>
      </Box>
    </Box>
  );
};

export default Specialities;
