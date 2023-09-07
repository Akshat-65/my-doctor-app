import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import EditPatientForm from "../components/EditPatientForm";
import { useState } from "react";

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
      dob: user.user.profile.dob,
      bloodType:"",
      address: {
        city: "N/a",
        country: "N/a",
        area: "N/a",
        state: "N/a",
        pincode: "N/a",
        locality: "N/a",
      },
    },
  };
  const [patientData, setPatientData] = useState(patientDetails);

  const handleInput = (e,name,value) => {
    console.log(value);
    // const { name } = e.target; 
    const inputValue = e.target.value;

    if (name === "name") {
      console.log("name", inputValue);
      console.log(inputValue);
      let name = inputValue;
      let nameArray = name.split(" ");
      let firstName = nameArray[0];
      let lastName = nameArray[1];
  
      setPatientData((prev) => ({
        ...prev,
        firstName: firstName,
        lastName: lastName,
      }));
    }
    else if(name === "area" || name === "locality" || name === "city" || name === "state" ||name === "pincode" ||name === "country") {
      setPatientData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          address: {
            ...prev.profile.address,
            [name]: inputValue,
          },
        },
      }));
    }
    else if ( name === "dob") {
      setPatientData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [name]: inputValue,
        },
      }));
    }
    else if(name === "bloodType" ){
      console.log(value);
      setPatientData((prev) => ({
        ...prev,
        profile: {
          ...prev.profile,
          [name]: value,
        },
      }));
    }
    else{
      setPatientData((prev) => ({
        ...prev,
        [name]: inputValue,
      }));
    }
  };

  console.log(patientData);


  // const handleNameChange = (e) => {
  //   console.log("name", e.target.value);
  //   console.log(e.target.value);
  //   let name = e.target.value;
  //   let nameArray = name.split(" ");
  //   let firstName = nameArray[0];
  //   let lastName = nameArray[1];

  //   setPatientData((prev) => ({
  //     ...prev,
  //     firstName: firstName,
  //     lastName: lastName,
  //   }));
  // };

  // const handleGender = (e) => {
  //   console.log("gender", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //     gender: e.target.value,
  //   }));
  // };

  // const handleBloodgroup = (e,value)=>{
  //   console.log("gender", value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //     bloodType: value,
  //   }));
  // }

  // const handleHouseNo = (e)=>{
  //   console.log("area", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         area : e.target.value
  //       }
  //      }
  //   }));
  // }

  // const handleLocality = (e)=>{
  //   console.log("locality", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         locality : e.target.value
  //       }
  //      }
  //   }));
  // }

  // const handleCity = (e)=>{
  //   console.log("city", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         city : e.target.value
  //       }
  //      }
  //   }));
  // }

  // const handleState = (e)=>{
  //   console.log("state", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         state : e.target.value
  //       }
  //      }
  //   }));
  // }

  // const handleCountry = (e)=>{
  //   console.log("country", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         country : e.target.value
  //       }
  //      }
  //   }));
  // }

  // const handlePincode = (e)=>{
  //   console.log("pincode", e.target.value);
  //   setPatientData((prev) => ({
  //     ...prev,
  //      profile : {
  //       ...prev.profile,
  //       address: {
  //         ...prev.profile.address, 
  //         pincode : e.target.value
  //       }
  //      }
  //   }));
  // }




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
              <Button variant="contained" sx={{ mt: "5px" }}>
                Edit
              </Button>
            </Box>
          </Box>

          <Box sx={formWrapper}>
            <EditPatientForm
              user={user}
              name={name}
              gender={gender}
              patientData={patientData}
              // handleNameChange={handleNameChange}
              // handleGender={handleGender}
              // handleBloodgroup  ={handleBloodgroup}
              // handleHouseNo = {handleHouseNo}
              // handleLocality={handleLocality}
              // handleCity= {handleCity}
              // handleState = {handleState}
              // handleCountry = {handleCountry}
              // handlePincode = {handlePincode}
              handleInput = {handleInput}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientProfile;
