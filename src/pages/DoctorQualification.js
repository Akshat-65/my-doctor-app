import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SideNav from "../components/UIComponents/SideNav";

const appointmentHeaderDropdownWrapper = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    mb: "1rem",
  };
  
  const appointmentHeaderStyles = {
    color: "#3f51b5",
    fontSize: { xs: "26px", md: "30px", lg: "36px" },
    fontWeight: "bold",
    mb: { xs: "0.2rem", sm: "0px" },
  };

const DoctorQualification = () => {
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
            <Box sx={appointmentHeaderDropdownWrapper}>
              <Typography variant="h4" sx={appointmentHeaderStyles}>
                My Appointments
              </Typography>
  
              <Box sx={{ display: "flex" }}>
                <Typography variant="body1" sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
                  Number of records
                </Typography>
              </Box>
            </Box>
  
            <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
              <Typography variant="body1" sx={{ color: "rgba(0, 0, 0, 0.54)" }}>
                No appointments are made yet
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
     );
}
 
export default DoctorQualification;