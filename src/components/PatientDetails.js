import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from "react";

const wrapper = {
  border: "0.5px solid lightGrey",
  p: "1.5rem",
  mt: "1rem",
  minHeight: "40vh",
};

const PatientDetails = () => {

    const [value, setValue] = useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  return (
    <>
      <Box sx={wrapper}>
        <Typography component="span">The appointment is for:</Typography>

        <Box>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            // onChange={handleChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </Box>

        <Box></Box>
      </Box>
    </>
  );
};

export default PatientDetails;
