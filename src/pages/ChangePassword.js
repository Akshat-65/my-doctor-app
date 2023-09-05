import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
const ChangePassword = () => {
    const drawerWidth = 240;
    return ( 
        <Box sx={{ display: "flex", mt: { xs: "12rem", md: "9rem" } }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
    
          </Box>
        </Box>
      </Box>
     );
}
 
export default ChangePassword;