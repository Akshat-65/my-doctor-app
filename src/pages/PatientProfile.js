import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import EditPatientForm from "../components/EditPatientForm";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";

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

const PatientProfile = () => {
  const user = JSON.parse(localStorage.getItem("userContext"));
  console.log(user.user.contactNumber);
  console.log(user.user);

  const [isEditable, setIsEditable] = useState(false);
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    area: true,
    locality: true,
    city: true,
    state: true,
    country: true,
    pincode: true,
  });

  const formValidity =
    formIsValid.name &&
    formIsValid.area &&
    formIsValid.locality &&
    formIsValid.city &&
    formIsValid.state &&
    formIsValid.country &&
    formIsValid.pincode;

  const name = user.user?.lastName
    ? user.user.firstName + " " + user.user.lastName
    : user.user?.firstName || " ";
  let nameArray = name.split(" ");
  let firstName = nameArray[0];
  let lastName = nameArray[1];
  console.log(name);
  const gender = user.user.gender[0].toUpperCase() + user.user.gender.slice(1);

  const patientDetails = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    profile: {
      dob: dayjs(user.user.profile.dob),
      bloodType: user.user?.profile?.bloodType
        ? user.user.profile.bloodType
        : "",
      address: {
        city: user.user?.profile?.address?.city
          ? user.user.profile.address.city
          : "N/a",
        country: user.user?.profile?.address?.country
          ? user.user.profile.address.country
          : "N/a",
        area: user.user?.profile?.address?.area
          ? user.user.profile.address.area
          : "N/a",
        state: user.user?.profile?.address?.state
          ? user.user.profile.address.state
          : "N/a",
        pincode: user.user?.profile?.address?.pincode
          ? user.user.profile.address.pincode
          : "N/a",
        locality: user.user?.profile?.address?.locality
          ? user.user.profile.address.locality
          : "N/a",
      },
    },
  };
  const [patientData, setPatientData] = useState(patientDetails);

  const handleEdit = () => {
    setIsEditable((prevIsEditable) => !prevIsEditable);
    patientData.profile.address.city = user.user?.profile?.address?.city
      ? user.user.profile.address.city
      : "";
    patientData.profile.address.country = user.user?.profile?.address?.country
      ? user.user.profile.address.country
      : "";
    patientData.profile.address.locality = user.user?.profile?.address?.locality
      ? user.user.profile.address.locality
      : "";
    patientData.profile.address.pincode = user.user?.profile?.address?.pincode
      ? user.user.profile.address.pincode
      : "";
    patientData.profile.address.state = user.user?.profile?.address?.state
      ? user.user.profile.address.state
      : "";
    patientData.profile.address.area = user.user?.profile?.address?.area
      ? user.user.profile.address.area
      : "";
  };

  const handleNameChange = (e) => {
    console.log("name", e.target.value);
    console.log(e.target.value);
    let name = e.target.value;
    let nameArray = name.split(" ");
    let firstName = nameArray[0];
    let lastName = nameArray[1];

    setPatientData((prev) => ({
      ...prev,
      firstName: firstName,
      lastName: lastName,
    }));
  };

  const handleGender = (e) => {
    console.log("gender", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleDob = (value) => {
    value = dayjs(value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        dob: value,
      },
    }));
  };

  const handleBloodgroup = (e,value) => {
    console.log("bloodGroup", value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        bloodType: value,
      },
    }));
  };

  const handleHouseNo = (e) => {
    console.log("area", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          area: e.target.value,
        },
      },
    }));
  };

  const handleLocality = (e) => {
    console.log("locality", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          locality: e.target.value,
        },
      },
    }));
  };

  const handleCity = (e) => {
    console.log("city", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          city: e.target.value,
        },
      },
    }));
  };

  const handleState = (e) => {
    console.log("state", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          state: e.target.value,
        },
      },
    }));
  };

  const handleCountry = (e) => {
    console.log("country", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          country: e.target.value,
        },
      },
    }));
  };

  const handlePincode = (e) => {
    console.log("pincode", e.target.value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        address: {
          ...prev.profile.address,
          pincode: e.target.value,
        },
      },
    }));
  };
  console.log(patientData);

  const validateName = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const startsWithNumber = /^\d/.test(inputValue);
    setFormIsValid((prevState) => ({
      ...prevState,
      name: !isEmpty && !startsWithNumber,
    }));
  };

  const validateAreaAndLocality = (e, fieldName) => {
    const inputValue = e.target.value.trim();
    const startsWithNumber = /^\d/.test(inputValue);
    const containsAlphabet = /[a-zA-Z]/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      [fieldName]: inputValue === "" || (startsWithNumber && containsAlphabet),
    }));
  };

  const validateCityAndCountry = (e, fieldName) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const containsOnlyAlphabets = isEmpty || /^[A-Za-z\s]+$/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      [fieldName]: containsOnlyAlphabets,
    }));
  };

  const validateState = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const startsWithNumber = /^\d/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      state: !startsWithNumber || isEmpty,
    }));
  };

  const validatePincode = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const containsOnlyNumbers = /^\d+$/.test(inputValue);
    setFormIsValid((prevState) => ({
      ...prevState,
      pincode: isEmpty || containsOnlyNumbers,
    }));
  };

  const drawerWidth = 240;
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
            <Box>
              <AccountCircle color="disabled" sx={{ fontSize: "140px" }} />
              <Typography variant="body2" sx={iconDescriptionStyles}>
                JPEG, JPG or PNG image less than 1 MB
              </Typography>
              <Typography variant="body2" sx={iconDescriptionStyles}>
                (Close up face picture looks great)
              </Typography>
            </Box>

            <Box>
              {isEditable ? (
                <Button
                  variant="contained"
                  sx={{ mt: "5px" }}
                  onClick={handleEdit}
                  disabled={!formValidity}
                >
                  Save
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mt: "5px" }}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              )}
            </Box>
          </Box>

          <Box sx={formWrapper}>
            <EditPatientForm
              user={user}
              name={name}
              gender={gender}
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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientProfile;
