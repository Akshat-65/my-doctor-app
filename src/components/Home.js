// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabList from "@mui/lab/TabList";
// import TabContext from "@mui/lab/TabContext";
// import TabPanel from "@mui/lab/TabPanel";
// import Divider from "@mui/material/Divider";
// import { useState } from "react";
// import Doctors from "./Doctors";
// const Home = () => {
//   const [value, setValue] = useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//       <TabContext value={value} >
//         <Box sx={{  display: "flex", width: "100%" }}>
//         <Box sx={{ width: "20%", height: "100vh", boxShadow: 1 }}>
//             <TabList
//               onChange={handleChange}
//               aria-label="lab API tabs example"
//               orientation="vertical"
//             >
//               <Tab label="Item One" value="1" />
//               <Tab label="Item Two" value="2" />
//             </TabList>
//         </Box>
//         <Box sx={{ width: "80%", height: "100vh" }}>
//           <TabPanel value="1"><Doctors/></TabPanel>
//           <TabPanel value="2">Item Two</TabPanel>
//         </Box>
//         </Box>
//       </TabContext>

//   );
// };

// export default Home;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import Doctors from "./Doctors";

const drawerWidth = 240;

function Home(props) {
  const drawer = (
    <div style={{ marginTop: "5rem" }}>
      <List>
        {["Doctors", "Specialities"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <PersonIcon /> : <BubbleChartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Doctors/>
      </Box>
    </Box>
  );
}

export default Home;
