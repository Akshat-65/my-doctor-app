import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import SideNav from "../components/UIComponents/SideNav";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import LinearProgress from '@mui/material/LinearProgress';
import Chart from "../components/UIComponents/DashboardChart";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs, { Dayjs } from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import StarIcon from '@mui/icons-material/Star';
import React ,{ useState } from "react";

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

const DoctorDashboard = () => {

    const [startTime, setStartTime] = React.useState(dayjs(Date.now()));
  const [endTime, setEndTime] = React.useState(
    dayjs(Date.now()).add(30, "minute")
  );

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
    setEndTime(newValue.add(30, "minute"));
  };
  const currencies = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
  ];

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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              width: "100%",
              gap: "1.5rem",
            }}
          >
            <div style={{ backgroundColor: "white", padding: "12px" }}>
              <p style={{ fontSize: "17px", margin: 0, padding: "8px" }}>
                Completed Appointments
              </p>
              <Divider />
              <Chart />
            </div>

            <div style={{ backgroundColor: "white", padding: "12px" }}>
              <p style={{ fontSize: "17px", margin: 0, padding: "8px" }}>
                Cancelled Appointments
              </p>
              <Divider />
              <Chart />
            </div>

            <div style={{ backgroundColor: "white", padding: "12px" }}>
              <p style={{ fontSize: "17px", margin: 0, padding: "8px" }}>
                Total Patients
              </p>
              <Divider />
              <Chart />
            </div>
          </div>

          {/* ============================================================================== */}

          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              marginTop: "2rem",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "1rem",
                marginLeft: "1%",
                paddingTop: "16px",
                paddingLeft: "8px",
              }}
            >
              Slots
            </p>
            <Divider />
            <div
              style={{
                display: "flex",
                //   gridTemplateColumns: "1fr 1fr 1fr ",
                width: "100%",
                flexDirection: "row",
                paddingTop: "18px",
                paddingLeft: "40px",
              }}
            >
              <div style={{ paddingBottom: "20px" }}>
                <Calendar />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "20px",
                  width: "25%",
                  marginLeft: "50px",
                }}
              >
                <LocalizationProvider
                  style={{ width: "100%" }}
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
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Button
                  variant="contained"
                  style={{
                    maxWidth: "40%",
                    margin: "auto",
                    marginTop: 0,
                    marginBottom: 0,
                  }}
                  color="primary"
                >
                  CREATE SLOT
                </Button>
              </div>

              <div
                style={{ fontSize: "20px", marginTop: "7%", marginLeft: "15%" }}
              >
                No slot present on selected date
              </div>
            </div>
          </div>

          {/* =================================================================================== */}

          <div
            style={{
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: "4%",
                padding: "110px 20px",
                fontSize: "20px",
                textAlign: "center",
                width: "100%",
              }}
            >
              No completed appointment so far
            </div>
            <div
              style={{
                marginRight: "4%",
                padding: "110px 20px",
                fontSize: "20px",
                textAlign: "center",
                width: "100%",
              }}
            >
              No upcoming appointment so far
            </div>
          </div>

          {/* ========================================================================================== */}
          <div
            style={{
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                marginLeft: "4%",
                padding: "110px 20px",
                fontSize: "20px",
                textAlign: "center",
                width: "100%",
              }}
            >
              No review so far
            </div>
            <div
              style={{
                marginRight: "4%",
                fontSize: "20px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Typography
                style={{
                  color: "#3f51b5",
                  padding: "5px 40px",
                  fontSize: "52px",
                  textAlign: "center",
                }}
              >
                3.4
              </Typography>
              <Typography
                style={{
                  padding: "0 44px",
                  fontSize: "14px",
                  marginTop: "-15px",
                  textAlign: "center",
                }}
              >
                5 ratings
              </Typography>
              <Box style={{ marginTop: "-27px", marginLeft: "15%" }}>
                <div>
                  <Typography style={{ marginTop: "30px", marginRight: "70%" }}>
                    5
                    <StarIcon
                      style={{
                        color: "#f1af09",
                        fontSize: "22px",
                        marginTop: "-25px",
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>

                  <LinearProgress
                    style={{
                      width: "50%",
                      marginTop: "-15px",
                      marginLeft: "19%",
                    }}
                    value={60}
                    variant="determinate"
                  />

                  <Typography
                    variant="body1"
                    style={{ marginTop: "-15px", marginLeft: "50%" }}
                  >
                    60%
                  </Typography>
                </div>
                <Box style={{ marginTop: "-25px" }}>
                  <Typography style={{ marginTop: "30px", marginRight: "70%" }}>
                    4
                    <StarIcon
                      style={{
                        color: "#f1af09",
                        fontSize: "22px",
                        marginTop: "-25px",
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>

                  <LinearProgress
                    style={{
                      width: "50%",
                      marginTop: "-15px",
                      marginLeft: "19%",
                    }}
                    value={50}
                    variant="determinate"
                  />

                  <Typography
                    variant="body1"
                    style={{ marginTop: "-15px", marginLeft: "50%" }}
                  >
                    50%
                  </Typography>
                </Box>
                <Box style={{ marginTop: "-25px" }}>
                  <Typography style={{ marginTop: "30px", marginRight: "70%" }}>
                    3
                    <StarIcon
                      style={{
                        color: "#f1af09",
                        fontSize: "22px",
                        marginTop: "-25px",
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>

                  <LinearProgress
                    style={{
                      width: "50%",
                      marginTop: "-15px",
                      marginLeft: "19%",
                    }}
                    value={70}
                    variant="determinate"
                  />

                  <Typography
                    variant="body1"
                    style={{ marginTop: "-15px", marginLeft: "50%" }}
                  >
                    70%
                  </Typography>
                </Box>
                <Box style={{ marginTop: "-25px" }}>
                  <Typography style={{ marginTop: "30px", marginRight: "70%" }}>
                    2
                    <StarIcon
                      style={{
                        color: "#f1af09",
                        fontSize: "22px",
                        marginTop: "-25px",
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>

                  <LinearProgress
                    style={{
                      width: "50%",
                      marginTop: "-15px",
                      marginLeft: "19%",
                    }}
                    value={20}
                    variant="determinate"
                  />

                  <Typography
                    variant="body1"
                    style={{ marginTop: "-15px", marginLeft: "50%" }}
                  >
                    20%
                  </Typography>
                </Box>
                <Box style={{ marginTop: "-25px" }}>
                  <Typography style={{ marginTop: "30px", marginRight: "70%" }}>
                    1
                    <StarIcon
                      style={{
                        color: "#f1af09",
                        fontSize: "22px",
                        marginTop: "-25px",
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>

                  <LinearProgress
                    style={{
                      width: "50%",
                      marginTop: "-15px",
                      marginLeft: "19%",
                    }}
                    value={30}
                    variant="determinate"
                  />

                  <Typography
                    variant="body1"
                    style={{ marginTop: "-15px", marginLeft: "50%" }}
                  >
                    30%
                  </Typography>
                </Box>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDashboard;
