import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideNav from "../components/UIComponents/SideNav";
import CustomButton from "../components/UIComponents/Button";
import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
import { useEffect, useState } from "react";
import DoctorExperienceForm from "../components/Doctors/DoctorExperienceForm";

const ExperienceButtonWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const experienceHeaderStyles = {
  color: "#000000",
  fontSize: { xs: "20px", sm: "25px" },
  fontWeight: "bold",
  mb: { xs: "0.2rem", sm: "0px" },
};

const licenceSpecialityWrapper = {
  display: "grid",
  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
  border: "0.5px solid lightgray",
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "20px",
  width:"95%",
  gap: "2%",
  marginTop: "20px",
  justifyContent: "space-evenly",
};

const licenseSpecialityStyles = { width: { xs: "86%", md: "66%" } , mb:'10px'};

const addMoreButtonWrapperStyles = {
  mt: "10px",
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "self-end",
};

const DoctorQualification = () => {
  const drawerWidth = 240;

  const userData = JSON.parse(localStorage.getItem("userContext") || null);
  const [editable, setEditable] = useState(false);
  const [disableSave, setDisableSave] = useState(false);
  const [speciality_list, setSpeciality_list] = useState([]);
  const [speciality, setSpeciality] = useState(
    userData?.user?.profile?.specialities || []
  );
  const [experience, setExperience] = useState(
    userData?.user?.profile?.experience || []
  );
  const [license, setLicense] = useState(
    userData.user.profile.licenceNumber || ""
  );

  function specialityChange(e, value) {
    setSpeciality(value);
  }

  const fetchSpecializations = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/specializations?$limit=500`
      );
      const data = await response.json();
      setSpeciality_list(data.data);
      console.log(data.data);
    } catch (error) {
      console.error("Error fetching specializations:", error);
    }
  };

  const deleteBox = (i) => {
    setExperience(experience.filter((item, index) => i !== index));
  };

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    const isExperienceEmpty = experience?.some(
      (e) =>
        !e.position ||
        !e.place ||
        !e.toYear ||
        !e.toMonth ||
        !e.fromYear ||
        !e.fromMonth
    );

    setDisableSave(isExperienceEmpty);
  }, [experience]);

  const addEmptyExperience = () => {
    setExperience([...experience, {}]);
  };
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
          <Box sx={ExperienceButtonWrapper}>
            <Typography variant="h4" sx={experienceHeaderStyles}>
              My Experience
            </Typography>

            <Box sx={{ display: "flex" }}>
              {editable && (
                <CustomButton
                  label="CANCEL"
                  onClick={() => {
                    setExperience(userData?.user?.profile?.experience);
                    setEditable(false);
                  }}
                />
              )}
              <Box sx={{ ml: "0.5rem" }}>
                {editable ? (
                  <CustomButton
                    label="SAVE"
                    onClick={() => {
                      setEditable(false);
                    }}
                    disabled={disableSave}
                  />
                ) : (
                  <CustomButton
                    label="EDIT"
                    onClick={() => {
                      setEditable(true);
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
          <Box sx={licenceSpecialityWrapper}>
            <TextField
              label="License Number"
              variant="outlined"
              value={license}
              onChange={(e) => {
                setLicense(e.target.value);
              }}
              disabled={!editable}
              required
              sx={licenseSpecialityStyles}
            />

            <Autocomplete
              multiple
              id="tags-outlined"
              options={speciality_list}
              getOptionLabel={(option) => option.name}
              filterSelectedOptions
              value={speciality.map((item) => item)}
              fullWidth
              disabled={!editable}
              sx={licenseSpecialityStyles}
              onChange={specialityChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  required
                  label="Speciality(ies)"
                />
              )}
            />
          </Box>

          <Box>
            {experience?.map((elem, index) => (
              <DoctorExperienceForm
                key={index}
                editable={editable}
                pos={elem.position}
                place={elem.place}
                toYear={elem.toYear}
                toMonth={elem.toMonth}
                fromYear={elem.fromYear}
                index={index}
                deleteBox={deleteBox}
                fromMonth={elem.fromMonth}
              />
            ))}
          </Box>
          <Box sx={addMoreButtonWrapperStyles}>
            {editable && (
              <CustomButton label="ADD MORE" onClick={addEmptyExperience} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorQualification;
