import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SideNav from "../components/UIComponents/SideNav";
import { useState } from "react";

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

const numberOfRecords = [5, 10, 20, 30];

const DoctorAppointment = () => {
  const drawerWidth = 240;

  const [filterValue, setFilterValue] = useState(10);
  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };
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
              <Box>
                <TextField
                  id="outlined-select-year"
                  variant="standard"
                  size="small"
                  select
                  value={filterValue}
                  sx={{ backgroundColor: "#f3f4f5", ml: "10px" }}
                  onChange={handleFilterChange}
                >
                  {numberOfRecords.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
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
};

export default DoctorAppointment;
