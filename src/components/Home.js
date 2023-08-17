import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Doctors from "./Doctors";
const Home = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <TabContext value={value} >
        <Box sx={{  display: "flex", width: "100%" }}>
        <Box sx={{ width: "20%", height: "100vh", boxShadow: 1 }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              orientation="vertical"
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
        </Box>
        <Box sx={{ width: "80%", height: "100vh" }}>
          <TabPanel value="1"><Doctors/></TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
        </Box>
        </Box>
      </TabContext>

  );
};

export default Home;
