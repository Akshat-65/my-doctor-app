import * as React from "react";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import logInImage from "../../assets/logInBackground.svg";
import signUpImage from '../../assets//signUpBackground.svg'
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Divider from "@mui/material/Divider";
import LogInForm from "../../components/LogInForm";
import { useState } from "react";
import PatientSignUp from "../../components/PatientSignUp";
import DoctorSignUp from "../../components/DoctorSignUp";
const tabPanelStyles ={ width:{xs:'93%',md:'90%',lg:'75%'}, p : 0, m:{xs:'auto',md:'0'}, mt: {xs:'3rem',md:'15px'}, boxShadow: 2, borderRadius:'4px'}

const LogIn = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box sx={{ display: "flex", justifyContent: 'space-around',width :'100%', mt:{xs:'13.5rem',md:'9rem'} }}>
        <Box sx={{ width: {xs:'0',md:"60%"} }}></Box>
        <Box sx={{ width: {xs:'100%',md:'40%'}}}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{overflow :'hidden',maxHeight :'50px',width:{xs:'93%',md:'90%',lg:'75%'},border: 1, borderColor: "divider", p:0, m:{xs:'auto',md:'0'},borderRadius:'4px'}}
          >
            <Tab label="LOGIN" value="1" wrapped/>
            <Divider orientation="vertical" sx={{ height: 50 }} />
            <Tab label="PATIENT SIGN UP" value="2" wrapped/>
            <Divider orientation="vertical" sx={{ height: 50 }} />
            <Tab label="DOCTOR SIGN UP" value="3" wrapped />
          </TabList>
        </Box>
      </Box>
      <Box sx={{ display: "flex",justifyContent: 'space-around',width :'100%' }}>
        <Box sx={{display:{xs:'none',md:'flex'},width: {xs: '0',md:'60%'}}}>
          <img src={value === '1' ? logInImage : signUpImage} style={{ width: '80%' }} />
        </Box>
        <Box sx={{ width: {xs:'100%',md:'40%'} }}>
          <TabPanel value="1"  sx={tabPanelStyles}>
            <LogInForm />
          </TabPanel>
          <TabPanel value="2"  sx={tabPanelStyles}>
            <PatientSignUp/>
            </TabPanel>
          <TabPanel value="3" sx={tabPanelStyles}>
            <DoctorSignUp/>
            </TabPanel>
        </Box>
      </Box>
    </TabContext>
  );
};

export default LogIn;
