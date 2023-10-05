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
    const user = JSON.parse(localStorage.getItem("userContext"));

    // const itemsList = [
    //     {
    //         text: "My Profile",
    //         to: "/myprofile",
    //         icon :  <AccountCircle/>
    //       },
    //     {
    //       text: "Change Password",
    //       to: "/changepassword",
    //       icon : <LockOutlinedIcon/> 
    //     }
    //   ];

    //   const handleNav = (navigateTo)=>{
    //     console.log(navigateTo);
    //      navigate(navigateTo);
    //   }

    const patientItemsList = [
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

    const doctorItemsList = [
      {
          text: "Personal Information",
          to: "/doctor-profile",
          icon :  <AccountCircle/>
        },
      {
        text: "Qualifications",
        to: "/doctor-profile/qualification",
        icon : <LockOutlinedIcon/> 
      },
      {
        text: "Experience",
        to: "/doctor-profile/experience",
        icon : <LockOutlinedIcon/> 
      }
    ];

    const itemsList = user?.user?.role === "patient" ? patientItemsList : doctorItemsList

    const handleNav = (navigateTo)=>{
      console.log(navigateTo);
       navigate(navigateTo);
    }

    return ( 
        <List sx={{ml:'4.3rem', cursor:'pointer', mt:'-1rem'}}>
        {itemsList.map((item, index) => {
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
     );
}
 
export default NestedDrawer;