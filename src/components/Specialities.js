import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "./SideNav";
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

        </Box>
      </Box>
     );
}
 
export default Specialities;