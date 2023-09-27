import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";

const wrapper = {
  border: "0.5px solid lightGrey",
  p: "1.5rem",
  mt: "1rem",
  minHeight: "40vh",
};

const informationWrapper = {
  width: "100%",
  ml: "auto",
  mr: "auto",
  pl: { xs: "16px", sm: "24px" },
  pr: { xs: "16px", sm: "24px" },
  maxWidth: { sm: "600px" },
};

const formIsValidStyles = {
    color: "#f44336",
    fontSize: "0.80rem",
    marginLeft: "1rem",
    marginBottom: 0,
    marginTop: "0.3rem",
  };

const PatientDetails = ({
  slotsDetail,
  handlePatientNameChange,
  patientNameInput,
  handlePatientContactChange,
  patientContactInput,
  appointmentFor,
  isDisabled,
  handlePatientChange,
  validatePatientName,
  validateContactNumber,
  formIsValid
}) => {
  const user = JSON.parse(localStorage.getItem("userContext"));
  //   console.log("patientDetail", user.user);
  console.log(patientNameInput);

  const name = user.user?.lastName
    ? user.user.firstName + " " + user.user.lastName
    : user.user?.firstName || " ";

  console.log(slotsDetail);
  return (
    <>
      <Box sx={wrapper}>
        <Typography component="span">The appointment is for:</Typography>

        <Box>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={appointmentFor}
            onChange={handlePatientChange}
          >
            <FormControlLabel
              value="myself"
              control={<Radio />}
              label="Myself"
            />
            <FormControlLabel
              value="someone-else"
              control={<Radio />}
              label="Someone Else"
            />
          </RadioGroup>
        </Box>

        <Box sx={informationWrapper}>
          <Typography component="span" sx={{ mb: "2rem" }}>
            Please provide the following information about the patient:
          </Typography>

          <FormControl
            error={!formIsValid.name && !isDisabled }
            sx={{
              width: "90%",
              mb: "2rem",
              mt: "2rem",
              backgroundColor: isDisabled ? "lightgray" : "transparent",
            }}
          >
            <InputLabel htmlFor="patient-name">Patient Name</InputLabel>
            <OutlinedInput
              disabled={isDisabled}
              id="patient-name"
              value={isDisabled ? name : patientNameInput}
              label="Patient Name"
              name="name"
              onChange={handlePatientNameChange}
              onBlur={validatePatientName}
            />
            {!formIsValid.name && !isDisabled && (
              <p style={formIsValidStyles}>Please enter a valid patient name!</p>
            )}
          </FormControl>

          <FormControl
          error={!formIsValid.contactNumber && !isDisabled }
            sx={{
              width: "90%",
              mb: "1rem",
              backgroundColor: isDisabled ? "lightgray" : "transparent",
            }}
          >
            <InputLabel htmlFor="patient-number">
              Patient's Mobile number
            </InputLabel>
            <OutlinedInput
              disabled={isDisabled}
              id="patient-number"
              value={isDisabled ? user.user.contactNumber : patientContactInput}
              onChange={handlePatientContactChange}
              onBlur={validateContactNumber}
              type="number"
              label="Patient's Mobile number"
            />
              {!formIsValid.contactNumber && !isDisabled &&(
              <p style={formIsValidStyles}>Please enter a valid 10-digit mobile number!</p>
            )}
          </FormControl>
          <br />
          <Typography component="span">{`Fee : Rs ${slotsDetail?.doctor?.profile?.consultationFee}`}</Typography>
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
};

export default PatientDetails;
