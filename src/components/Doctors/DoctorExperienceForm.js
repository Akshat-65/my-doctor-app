import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Box } from "@mui/material";

const typographyStyles = {
  color: "#696969",
  fontSize: "15px",
  marginLeft: "15px",
};

const addMoreButtonWrapperStyles = {
  display: "flex",
  justifyContent: "flex-end",
  mr: "1rem",
};

const inputWrapperStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  border: "0.5px solid lightgray",
  backgroundColor: "white",
  width: "95%",
  justifyContent: "space-evenly",
  alignItems: "center",
  padding: "20px",
};

const textfieldStyles = {
  width: { xs: "86%", md: "66%" },
  marginTop: "15px",
  marginBottom: "10px",
};

const currentlyWorkingStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const DoctorExperienceForm = ({
  editable,
  pos,
  place,
  toYear,
  toMonth,
  fromYear,
  fromMonth,
  index,
  deleteBox,
}) => {
  const [position, setPosition] = useState(pos);
  const [startDate, setStartDate] = useState(
    fromMonth && fromYear ? dayjs(`${fromYear}-${fromMonth}`) : null
  );
  const [endDate, setEndDate] = useState(
    toMonth && toYear ? dayjs(`${toYear}-${toMonth}`) : null
  );

  const [currentlyWorking, setCurrentlyWorking] = useState(false);

  const [hospital, setHospital] = useState(place);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  const handleStartDateChange = (date) => {
    setStartDate(dayjs(date));
    console.log(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(dayjs(date));
    console.log(date);
  };

  return (
    <Box>
      <Box sx={addMoreButtonWrapperStyles}>
        <IconButton
          aria-label="delete row"
          disabled={!editable}
          sx={{ color: "#3f51b5" }}
          onClick={() => {
            deleteBox(index);
          }}
        >
          <ClearIcon />
        </IconButton>
      </Box>
      <Box sx={inputWrapperStyles}>
        <Box>
          <TextField
            variant="outlined"
            label="Position"
            required
            disabled={!editable}
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
            sx={textfieldStyles}
          />
          <TextField
            variant="outlined"
            label="Hospital/Clinic"
            required
            disabled={!editable}
            value={hospital}
            onChange={(e) => {
              setHospital(e.target.value);
            }}
            sx={textfieldStyles}
          />
        </Box>

        <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex" }}>
              <MobileDatePicker
                value={startDate}
                disabled={!editable}
                views={["month", "year"]}
                onChange={handleStartDateChange}
              />
              <Typography sx={typographyStyles}>
                Start
                <br />
                Date*
              </Typography>
            </Box>
            <Box sx={currentlyWorkingStyles}>
              <Switch
                {...label}
                disabled={!editable}
                onChange={() => {
                  setCurrentlyWorking(!currentlyWorking);
                }}
              />{" "}
              <Typography sx={{ ...typographyStyles, margin: 0 }}>
                Currently working
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <MobileDatePicker
                value={endDate}
                views={["month", "year"]}
                onChange={handleEndDateChange}
                disabled={currentlyWorking || !editable}
              />
              <Typography sx={typographyStyles}>
                End
                <br />
                Date*
              </Typography>
            </Box>
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorExperienceForm;
