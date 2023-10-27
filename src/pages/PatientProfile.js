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

const PatientProfile = () => {
  const user = JSON.parse(localStorage.getItem("userContext"));
  console.log(user.user._id);
  console.log(user);
  const accessToken = user.accessToken;
  console.log(accessToken);
  const id = user.user._id;

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

  const patientDetails = {
    firstName: firstName,
    lastName: lastName,
    gender: user.user.gender,
    profile: {
      dob: dayjs(user.user?.profile?.dob).format("YYYY-MM-DD"),
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
      ? user?.user?.profile?.address?.city
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

  const handleSave = async () => {
    try {
      const response = await fetch(
        `http://my-doctors.net:8090/patients/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(patientData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setIsEditable(false);
      // setDetails(initialState);
      setPatientData(data);
    } catch (error) {
      console.log(error);
    }
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
    let gender = e.target.value;
    gender = gender.charAt(0).toLowerCase() + gender.substring(1);
    console.log("changed", gender);
    setPatientData((prev) => ({
      ...prev,
      gender: gender,
    }));
  };

  const handleDob = (value) => {
    value = dayjs(value).format("YYYY-MM-DD");
    console.log(value);
    setPatientData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        dob: value,
      },
    }));
  };

  const handleBloodgroup = (e, value) => {
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

  const [selectedImage, setSelectedImage] = useState(null);

  const handleCameraIconClick = () => {
    // Trigger the file input dialog
    document.getElementById("imageInput").click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      // try {
      //   const response = await fetch(`http://my-doctors.net:8090/patients/${id}`, {
      //     method: "PATCH",
      //     body:selectedImage ,
      //     headers: {
      //       "Content-Type": "application/json; charset=UTF-8",
      //       Authorization: `Bearer ${accessToken}`,
      //     },
      //   });

      // } catch (error) {
      //   console.error("An error occurred during the PATCH request:", error);
      // }
    }
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

              <AccountCircle color="disabled" sx={{ fontSize: "140px" }} />
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
              )}

              <input
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
            </Box>

            <Box>
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
            </Box>
          </Box>

          <Box sx={formWrapper}>
            <EditPatientForm
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
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientProfile;
