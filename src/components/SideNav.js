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
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const SideNav = () => {
    
    const navigate = useNavigate();

    const itemsList = [
        {
          text: "Doctors",
          to: "/",
        },
        {
          text: "Specialities",
          to: "/specialities",
        },
      ];
    
      const drawer = (
        <div style={{ marginTop: "7.3rem" }}>
          <List>
            {itemsList.map((item, index) => {
              const { text, to } = item;
              return (
                <ListItem key={text} disablePadding onClick={()=>handleNav(to)}>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <PersonIcon /> : <BubbleChartIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      );

      const handleNav = (navigateTo)=>{
        console.log(navigateTo);
         navigate(navigateTo);
      }
    return ( 
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
     );
}
 
export default SideNav;