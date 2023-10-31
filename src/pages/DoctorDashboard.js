import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SideNav from "../components/UIComponents/SideNav";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Chart from "../components/UIComponents/DashboardChart";
import appointmentSize from "../data/appointmentSize";
import { useState } from "react";
import DoctorRating from "../components/Doctors/DoctorRating";

const chartWrapperStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: "100%",
  gap: "1.5rem",
};

const chartTitleWrapperStyles = { backgroundColor: "white", padding: "12px" };
const chartTitleStyles = { fontSize: "17px", margin: 0, padding: "8px" };

const slotsWrapperStyles = {
  backgroundColor: "white",
  width: "100%",
  marginTop: "2rem",
  marginBottom: "20px",
};

const slotsTitleStyles = {
  fontSize: "1rem",
  marginLeft: "1%",
  paddingTop: "16px",
  paddingLeft: "8px",
};

const calendarTimePickerWrapperStyles = {
  display: "flex",
  width: "100%",
  paddingTop: "18px",
  paddingLeft: "40px",
};

const timePickerWrapperStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  width: "25%",
  marginLeft: "50px",
};

const buttonStyles = {
  maxWidth: "40%",
  margin: "auto",
  mt: 0,
  mb: 0,
};

const noSlotWrapperStyles = {
  fontSize: "20px",
  marginTop: "7%",
  marginLeft: "15%",
};

const appointmentStatusStyles = {
  padding: "12px",
  marginBottom: "20px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
};

const appointmentStatusTitleStyles = {
  marginLeft: "4%",
  padding: "110px 20px",
  fontSize: "20px",
  textAlign: "center",
  width: "100%",
};

const DoctorDashboard = () => {
  const [startTime, setStartTime] = useState(dayjs(Date.now()));
  const [endTime, setEndTime] = useState(dayjs(Date.now()).add(30, "minute"));

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
    setEndTime(newValue.add(30, "minute"));
  };

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
          <Box sx={chartWrapperStyles}>
            <Box sx={chartTitleWrapperStyles}>
              <Typography sx={chartTitleStyles}>
                Completed Appointments
              </Typography>
              <Divider />
              <Chart />
            </Box>

            <Box sx={chartTitleWrapperStyles}>
              <Typography sx={chartTitleStyles}>
                Cancelled Appointments
              </Typography>
              <Divider />
              <Chart />
            </Box>

            <Box sx={chartTitleWrapperStyles}>
              <Typography sx={chartTitleStyles}>Total Patients</Typography>
              <Divider />
              <Chart />
            </Box>
          </Box>

          <Box sx={slotsWrapperStyles}>
            <Typography sx={slotsTitleStyles}>Slots</Typography>
            <Divider />
            <Box sx={calendarTimePickerWrapperStyles}>
              <Box sx={{ pb: "20px" }}>
                <Calendar />
              </Box>

              <Box sx={timePickerWrapperStyles}>
                <LocalizationProvider
                  sx={{ width: "100%" }}
                  dateAdapter={AdapterDayjs}
                >
                  <TimePicker
                    label="Start Time"
                    value={startTime}
                    fullWidth
                    onChange={handleStartTimeChange}
                  />
                </LocalizationProvider>
                <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
                  <TimePicker label="End Time" value={endTime} disabled />
                </LocalizationProvider>

                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  variant="outlined"
                  label="Appointment Size"
                  defaultValue="1"
                  helperText="Slot duration: 30 minutes"
                >
                  {appointmentSize.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Button variant="contained" sx={buttonStyles} color="primary">
                  CREATE SLOT
                </Button>
              </Box>

              <Box sx={noSlotWrapperStyles}>
                No slot present on selected date
              </Box>
            </Box>
          </Box>

          <Box sx={appointmentStatusStyles}>
            <Box sx={appointmentStatusTitleStyles}>
              No completed appointment so far
            </Box>
            <Box sx={appointmentStatusTitleStyles}>
              No upcoming appointment so far
            </Box>
          </Box>

          <Box sx={appointmentStatusStyles}>
            <Box sx={appointmentStatusTitleStyles}>No review so far</Box>
            <DoctorRating />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;
