import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NestedDrawer from "./NestedDrawer";


export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const navigate = useNavigate();
  const user =  JSON.parse(localStorage.getItem("userContext"));

  const location = useLocation();
  let getLocation = location.pathname;

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const patientItemsList = [
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

  const doctorItemsList = [
    {
      text: "Dashboard",
      to: "/doctor-dashboard",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      text: "Doctor Profile",
      to: "/doctor-profile",
      icon: <PersonAddAltOutlinedIcon />,
    },
    {
      text: "Appointments",
      to: "/doctor-appointments",
      icon: <CalendarTodayIcon />,
    },
    {
      text: "Reviews",
      to: "/",
      icon: <ReviewsIcon />,
    },
  ];

  const itemsList = user?.user?.role === "patient" ? patientItemsList : doctorItemsList;

  let itemsListWithoutLogIn = patientItemsList.slice(0,2);

  let nestedDrawer;
  if (getLocation === "/myprofile" || getLocation === "/changepassword") {
    nestedDrawer = <NestedDrawer/>;
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
                <List>
            {(user ? itemsList : itemsListWithoutLogIn).map((item, index) => {
              const { text, to, icon } = item;
              return (
                <ListItem key={text} disablePadding onClick={()=>handleNav(to)} sx={{pb:'12px'}}>
                  <ListItemButton>
                    <ListItemIcon>
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          {nestedDrawer}
    </Box>
  );

  const handleNav = (navigateTo)=>{
    console.log(navigateTo);
     navigate(navigateTo);
  }

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)} sx={{ color: "black" }}>
            <MenuIcon />
          </Button>
          <Drawer open={state["left"]} onClose={toggleDrawer("left", false)} sx={{zIndex:1400}}>
            {
              <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                <IconButton onClick={toggleDrawer("left", false)}>
                  <CloseIcon />
                </IconButton>
              </Box>
            }
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
