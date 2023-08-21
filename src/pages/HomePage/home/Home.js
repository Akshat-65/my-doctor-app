import * as React from "react";
import Box from "@mui/material/Box";
import Doctors from "../../../components/Doctors";
import SideNav from "../../../components/SideNav";

const drawerWidth = 240;

function Home(props) {

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
        <Doctors />
      </Box>
    </Box>
  );
}

export default Home;
