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
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });

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
