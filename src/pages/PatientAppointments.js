import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import SideNav from "../components/UIComponents/SideNav";
import { useEffect, useState } from "react";

const specialityHeaderDropdownWrapper = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
  mb: "1rem",
};

const specialityHeaderStyles = {
  color: "#3f51b5",
  fontSize: { xs: "26px", md: "30px", lg: "36px" },
  fontWeight: "bold",
  mb: { xs: "0.2rem", sm: "0px" },
};

const numberOfRecords = [5, 10, 20, 30];

const PatientAppointments = ({ bookingFailed }) => {
  const drawerWidth = 240;

  const [filterValue, setFilterValue] = useState(10);
  const [showAlert, setShowAlert] = useState();

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  

  const user = JSON.parse(localStorage.getItem("userContext"));
  console.log(user);
  const id = user.user._id;
  const accessToken = user.accessToken;


  const getAppointments = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/appointments?${id}`,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getAppointments();
    setShowAlert(bookingFailed);
  },[])

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
          <Box sx={specialityHeaderDropdownWrapper}>
            <Typography variant="h4" sx={specialityHeaderStyles}>
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

          {showAlert && (
            <Box>
              <Alert severity="error" sx={{ width: "90%", mt: "1rem" }}>
                Appointment booking failed!
              </Alert>
            </Box>
          )}

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

export default PatientAppointments;
