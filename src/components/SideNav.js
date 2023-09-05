import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NestedDrawer from "./NestedDrawer";

const drawerWidth = 240;
const SideNav = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userContext"));

  const location = useLocation();
  let getLocation = location.pathname;
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  console.log(getLocation);

  const itemsList = [
    {
      text: "Doctors",
      to: "/",
      icon: <PersonIcon />,
    },
    {
      text: "Specialities",
      to: "/specialities",
      icon: <BubbleChartIcon />,
    },
    {
      text: "My Appointments",
      to: "/appointments",
      icon: <CalendarTodayIcon />,
    },
    {
      text: "Account Settings",
      to: "/myprofile",
      icon: <ExitToAppIcon />,
    },
  ];

  let itemsListWithoutLogIn = itemsList.slice(0, 2);
  let nestedDrawer;
  if (getLocation === "/myprofile" || getLocation === "/changepassword") {
    nestedDrawer = <NestedDrawer/>;
  }

  const drawer = (
    <div style={{ marginTop: "7.3rem" }}>
      <List>
        {(user ? itemsList : itemsListWithoutLogIn).map((item, index) => {
          const { text, to, icon } = item;
          return (
            <ListItem key={text} disablePadding onClick={() => handleNav(to)} sx={{pb:'12px'}}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      {nestedDrawer}
    </div>
  );

  const handleNav = (navigateTo) => {
    console.log(navigateTo);
    navigate(navigateTo);
  };
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
};

export default SideNav;
