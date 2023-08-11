import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import LogInForm from "./LogInForm";

const Tabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ border: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="LOGIN" value="1" />
            <Divider orientation="vertical" sx={{ height: 50 }} />
            <Tab label="PATIENT SIGN UP" value="2" />
            <Divider orientation="vertical" sx={{ height: 50 }} />
            <Tab label="DOCTOR SIGN UP" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><LogInForm/></TabPanel>
        <TabPanel value="2">PATIENT SIGN UP</TabPanel>
        <TabPanel value="3">DOCTOR SIGN UP</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Tabs;
