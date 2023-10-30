import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";

const inputFieldWrapperStyles = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
  width: "95%",
  gap: "12px",
  mb: "10px",
  mt: "10px",
  p: "12px",
  boxShadow: 2,
};

const DoctorQualificationForm = ({
  name,
  institute,
  year,
  qualification,
  editable,
  index,
  deleteBox,
  setQualification,
}) => {
  const [changedName, setChangedName] = useState(name);
  const [changedInsitute, setChangedInsitute] = useState(institute);
  const [changedYear, setChangedYear] = useState(year);

  useEffect(() => {
    qualification[index].name = changedName;
    setQualification([...qualification]);
  }, [changedName]);

  useEffect(() => {
    qualification[index].institute = changedInsitute;
    setQualification([...qualification]);
  }, [changedInsitute]);

  useEffect(() => {
    qualification[index].year = changedYear;
    setQualification([...qualification]);
  }, [changedYear]);

  const handleInputValueChange = (e) => {
    if (e.target.name === "doctorDegree") {
      setChangedName(e.target.value);
    }
    if (e.target.name === "institute") {
      setChangedInsitute(e.target.value);
    }
    if (e.target.name === "completionYear") {
      setChangedYear(e.target.value);
    }
  };

  return (
    <>
      <Box sx={{display:"flex"}}>
        <Box sx={inputFieldWrapperStyles}>
          <TextField
            id="outlined-basic"
            label="Degree/Certification"
            variant="outlined"
            name="doctorDegree"
            required
            disabled={!editable}
            value={changedName}
            onChange={handleInputValueChange}
            sx={{ width: "80%" }}
          />
          <TextField
            id="outlined-basic"
            label="Institute Name"
            variant="outlined"
            name="institute"
            disabled={!editable}
            sx={{ width: "80%" }}
            required
            value={changedInsitute}
            onChange={handleInputValueChange}
          />
          <TextField
            id="outlined-basic"
            label="Year of Completion"
            variant="outlined"
            name="completionYear"
            type="number"
            required
            disabled={!editable}
            onChange={handleInputValueChange}
            value={changedYear}
            sx={{ width: "80%" }}
          />
        </Box>
      </Box>

      <Box>
        <IconButton
          aria-label="delete row"
          disabled={!editable}
          onClick={() => {
            deleteBox(index);
          }}
        >
          <ClearIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default DoctorQualificationForm;
