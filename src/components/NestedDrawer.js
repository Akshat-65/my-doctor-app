import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";

const NestedDrawer = () => {

    const navigate = useNavigate();

    const itemsList = [
        {
            text: "My Profile",
            to: "/myprofile",
            icon :  <AccountCircle/>
          },
        {
          text: "Change Password",
          to: "/changepassword",
          icon : <LockOutlinedIcon/> 
        }
      ];

      const handleNav = (navigateTo)=>{
        console.log(navigateTo);
         navigate(navigateTo);
      }

    return ( 
        <List sx={{ml:'4.3rem', cursor:'pointer'}}>
        {itemsList.map((item, index) => {
          const { text, to, icon } = item;
          return (
            <ListItem key={text} disablePadding onClick={()=>handleNav(to)}>
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
     );
}
 
export default NestedDrawer;