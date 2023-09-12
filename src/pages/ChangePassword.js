import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';


const changePasswordHeaderWrapper = {
  display: "flex",
  alignItems : "center",
mb:'1rem'
};

const changePasswordStyle = {
  color: "#3f51b5",
  fontSize: { xs: "26px", md: "30px", lg: "36px" },
  fontWeight: "bold",
};
const ChangePassword = () => {
    const drawerWidth = 240;
    return ( 
        <Box sx={{ display: "flex", mt: { xs: "12rem", md: "9rem", } }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box component="section" sx={{ pl: "1rem", pr: "1rem" ,ml:{md:'30%'},mt:{md:'3%'}}}>

          <Box sx={changePasswordHeaderWrapper}>
            <Typography variant="h4" sx={changePasswordStyle}>
            Change Password
            </Typography>
          </Box>

          <Box component="form" sx= {{display:'flex', flexDirection:'column', gap:'16px'}}>
            
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{maxWidth:'500px'}} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{maxWidth:'500px'}}/>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{maxWidth:'500px'}}/>
          </Box>
    
          </Box>
        </Box>
      </Box>
     );
}
 
export default ChangePassword;