import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { shadows } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DoctorSlotsPanel = () => {
  const [slots, setSlots] = useState();
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();
  const currentTime = new Date().toISOString();
  const paramObject = {
    doctorId: id,
    "startTime[$gte]": currentTime,
    "$sort[startTime]": 1,
  };
  const params = new URLSearchParams(paramObject);

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

  const allSlots = (
    <TabContext
      value={value}
      sx={{ minWidth: { xs: "250px", sm: "480px" } }}
    >
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
        }}
      >
        {slots?.map((elem) => (
          <Tab
            key={elem.startTime}
            label={elem.startTime}
            value={elem.startTime}
          />
        ))}
      </Tabs>
      {slots?.map((elem) => (
        <TabPanel key={elem.startTime} value={elem.startTime}>
          {elem.startTime}
        </TabPanel>
      ))}
    </TabContext>
  );

  return <Box sx={{maxWidth:"47%"}}>{allSlots}</Box>;
};

export default DoctorSlotsPanel;
