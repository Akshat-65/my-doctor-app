import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import EditPatientForm from "../components/Patients/EditPatientForm";
import dayjs from "dayjs";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloseIcon from "@mui/icons-material/Close";
import {useState } from "react";
// ------------------------------------styles----------------------------------------

const profileHeaderStyleWrapper = {
    display: "flex",
  };
  
  const profileHeaderStyle = {
    color: "#3f51b5",
    fontSize: { xs: "26px", md: "30px", lg: "36px" },
    fontWeight: "bold",
  };
  
  const iconDescriptionStyles = {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "12px",
  };
  
  const formWrapper = {
    display: "grid",
    gridTemplateColumns: {
      xs: "auto",
      sm: "1fr 1fr",
      lg: "1fr 1fr 1fr",
    },
    gap: "20px",
    mt: "2rem",
  };
  
  // ------------------------------------component----------------------------------------
const drawerWidth = 240;
const DoctorProfile = () => {
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
          <Box sx={profileHeaderStyleWrapper}>
            <Typography variant="h4" sx={profileHeaderStyle}>
              My Profile
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* <Box> */}
              {/* 
              {selectedImage ? (
                <img src={selectedImage} alt="Selected" style={{ width: '140px', height: '140px', borderRadius: '50%' }} />
              ) : (
                <div>
                  <CameraAltIcon
                    onClick={handleCameraIconClick}
                    sx={{
                      color: 'rgb(63, 81, 181)',
                      fontSize: '30px',
                      ml: '20.3%',
                      mt: '0.5%',
                      cursor: 'pointer',
                    }}
                  />
                  <CloseIcon
                    sx={{
                      fontSize: '30px',
                      color: 'rgb(128, 128, 128)',
                      mt: '0.5%',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              )}
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              /> */}

              {/* <AccountCircle color="disabled" sx={{ fontSize: "140px" }} />
              {isEditable && (
                <>
                  <Box sx={{ display: "flex" }}>
                    <CameraAltIcon
                      onClick={handleCameraIconClick}
                      sx={{
                        color: "rgb(63, 81, 181)",
                        fontSize: "30px",
                        ml: "20.3%",
                        mr:"0.4rem",
                        mt: "-0.5rem",
                        cursor: "pointer",
                      }}
                    />
                    <CloseIcon
                      sx={{
                        fontSize: "30px",
                        color: "rgb(128, 128, 128)",
                        mt: "-0.5rem",
                      }}
                    />
                  </Box>
                </>
              )} */}

              {/* <input
                type="file"
                id="imageInput"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />

              <Typography variant="body2" sx={iconDescriptionStyles}>
                JPEG, JPG or PNG image less than 1 MB
              </Typography>
              <Typography variant="body2" sx={iconDescriptionStyles}>
                (Close up face picture looks great)
              </Typography>
            </Box> */}

            {/* <Box>
              {isEditable ? (
                <Button
                  variant="contained"
                  sx={{ mt: "5px" ,backgroundColor:'rgb(63, 81, 181)'}}
                  onClick={handleSave}
                  disabled={!formValidity}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mt: "5px", backgroundColor:'rgb(63, 81, 181)' }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </Box> */}
          </Box>

          <Box sx={formWrapper}>
            {/* <EditPatientForm
              user={user}
              name={name}
              // gender={gender}
              patientData={patientData}
              handleNameChange={handleNameChange}
              handleGender={handleGender}
              handleBloodgroup={handleBloodgroup}
              handleHouseNo={handleHouseNo}
              handleLocality={handleLocality}
              handleCity={handleCity}
              handleState={handleState}
              handleCountry={handleCountry}
              handlePincode={handlePincode}
              isEditable={isEditable}
              formIsValid={formIsValid}
              validateName={validateName}
              validateAreaAndLocality={validateAreaAndLocality}
              validateCityAndCountry={validateCityAndCountry}
              validateState={validateState}
              validatePincode={validatePincode}
              handleDob={handleDob}
            /> */}
          </Box>
        </Box>
      </Box>
    </Box>
     );
}
 
export default DoctorProfile;