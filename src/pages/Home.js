import * as React from "react";
import Box from "@mui/material/Box";
import Doctors from "../components/Doctors/Doctors";
import SideNav from "../components/UIComponents/SideNav";

const drawerWidth = 240;

function Home() {

  const user =  JSON.parse(localStorage.getItem("userContext"));

  return (
    <Box
      sx={{ display: "flex", mt: { xs: "12rem", md: "9rem" }, width: "100%" }}
    >
      <SideNav/>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Doctors />
      </Box>
    </Box>
  );
}

export default Home;
