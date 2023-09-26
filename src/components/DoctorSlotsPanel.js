import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DoctorSlotsPanel = () => {
  const [slots, setSlots] = useState();
  const [value, setValue] = useState();
  const [loggedIn, setLoggedIn] = useState(true);

  const user = JSON.parse(localStorage.getItem("userContext"));
  const navigate = useNavigate();
  const { id } = useParams();
  const currentTime = new Date().toISOString();
  const paramObject = {
    doctorId: id,
    "startTime[$gte]": currentTime,
    "$sort[startTime]": 1,
  };
  const params = new URLSearchParams(paramObject);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAvailableSlots = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/slots?${params.toString()}`
      );
      const data = await response.json();
      console.log(data.data);
      setSlots(data.data);
      setValue(data.data[0].startTime);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAvailableSlots();
  }, [id]);

  const handleBookAppointment = () => {
    if (user) {
      navigate("/book-appointment");
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const allSlots = (
    <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: "4px",
          boxShadow: 3,
          minWidth: { xs: "280px", sm: "510px" },
        }}
      >
        {slots?.map((elem) => (
          <Tab
            key={elem.startTime}
            // label={elem.startTime}
            label={dayjs(elem.startTime).format("MMM D, YYYY")}
            value={elem.startTime}
          />
        ))}
      </Tabs>
      {slots?.map((elem) => (
        <TabPanel
          key={elem.startTime}
          value={elem.startTime}
          sx={{ minWidth: { xs: "250px", sm: "480px" } }}
        >
          {/* {elem.startTime} */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: "25px",
              color: "#3f51b5",
              border: "1px solid #3f51b5",
              fontSize: "0.8125rem",
            }}
            onClick={handleBookAppointment}
          >
            {`${dayjs(elem.startTime).format("h:mm a")} - ${dayjs(
              elem.endTime
            ).format("h:mm a")}`}
          </Button>
        </TabPanel>
      ))}
    </TabContext>
  );

  return (
    <Box>
      {allSlots}
      {!loggedIn && (
        <Box>
          <Typography sx={{ color: "red" }}>
            Please <Link to="/login" style={{ textDecoration: "none" }}>Sign in</Link> /{" "}
            <Link style={{ textDecoration: "none" }}>Register</Link> to book an
            appointment.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default DoctorSlotsPanel;
