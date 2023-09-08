import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const formIsValidStyles = {
  color: "#f44336",
  fontSize: "0.80rem",
  marginLeft: "1rem",
  marginBottom: 0,
  marginTop: "0.3rem",
};

const EditPatientForm = ({
  user,
  name,
  gender,
  patientData,
  handleNameChange,
  handleGender,
  handleBloodgroup,
  handleHouseNo,
  handleLocality,
  handleCity,
  handleState,
  handleCountry,
  handlePincode,
  // handleInput
}) => {
  const genderOptions = [
    { value: "Male" },
    { value: "Female" },
    { value: "Other" },
  ];

  const [formIsValid, setFormIsValid] = useState({
    name: true,
    area: true,
    locality: true,
    city: true,
    state: true,
    country: true,
    pincode: true,
  });

  const handleNameValidity = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const startsWithNumber = /^\d/.test(inputValue);
    setFormIsValid((prevState) => ({
      ...prevState,
      name: !isEmpty && !startsWithNumber,
    }));
  };

  const handleAreaLocalityValidity = (e, fieldName) => {
    const inputValue = e.target.value.trim();
    const startsWithNumber = /^\d/.test(inputValue);
    const containsAlphabet = /[a-zA-Z]/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      [fieldName]: inputValue === "" || (startsWithNumber && containsAlphabet),
    }));
  };

  const handleCityAndCountryValidity = (e, fieldName) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const containsOnlyAlphabets = isEmpty || /^[A-Za-z\s]+$/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      [fieldName]: containsOnlyAlphabets,
    }));
  };

  const handleStateValidity = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const startsWithNumber = /^\d/.test(inputValue);

    setFormIsValid((prevState) => ({
      ...prevState,
      state: !startsWithNumber || isEmpty,
    }));
  };

  const handlePincodeValidity = (e) => {
    const inputValue = e.target.value.trim();
    const isEmpty = inputValue === "";
    const containsOnlyNumbers = /^\d+$/.test(inputValue);
    setFormIsValid((prevState) => ({
      ...prevState,
      pincode: isEmpty || containsOnlyNumbers,
    }));
  };

  //   const handleInputChange = (e,name,value)=>{
  // handleInput(e,name,value)
  //   }

  const handleInputNameChange = (e) => {
    handleNameChange(e);
  };

  const handleGenderChange = (e) => {
    handleGender(e);
  };

  const handleBloodgroupChange = (e, value) => {
    handleBloodgroup(e, value);
  };

  const handleHouseNoChange = (e) => {
    handleHouseNo(e);
  };

  const handleLocalityChange = (e) => {
    handleLocality(e);
  };

  const handleCityChange = (e) => {
    handleCity(e);
  };

  const handleStateChange = (e) => {
    handleState(e);
  };

  const handleCountryChange = (e) => {
    handleCountry(e);
  };

  const handlePincodeChange = (e) => {
    handlePincode(e);
  };

  return (
    <>
      <FormControl error={!formIsValid.name}>
        <InputLabel htmlFor="patient-name">Name</InputLabel>
        <OutlinedInput
          id="patient-name"
          defaultValue={name}
          label="Name"
          name="name"
          onChange={handleInputNameChange}
          // onChange={handleInputChange}
          onBlur={handleNameValidity}
        />
        {!formIsValid.name && (
          <p style={formIsValidStyles}>Enter a valid name</p>
        )}
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">Phone Number</InputLabel>
        <OutlinedInput
          disabled
          id="patient-name"
          value={user.user.contactNumber}
          label="Phone Number"
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">Email</InputLabel>
        <OutlinedInput
          id="patient-name"
          value={user.user.email}
          label="Email"
          disabled
        />
      </FormControl>

      <TextField
        id="outlined-select-currency"
        select
        label="Gender"
        name="gender"
        defaultValue={gender}
        onChange={handleGenderChange}
        // onChange={handleInputChange}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      <FormControl>
        <InputLabel htmlFor="patient-name">Date of birth</InputLabel>
        <OutlinedInput
          id="patient-name"
          name="dob"
          value={user.user.profile.dob}
          label="Date of birth"
        />
      </FormControl>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        fullWidth
        options={bloodgroup}
        name="bloodType"
        value={patientData.profile.bloodType || null}
        onChange={(e, value) => handleBloodgroupChange(e, value)}
        // onChange={(e, newValue) => handleInputChange(e,"bloodType", newValue)}
        renderInput={(params) => <TextField {...params} label="Bloodgroup" />}
      />

      <FormControl error={!formIsValid.area}>
        <InputLabel htmlFor="patient-name">House No./Street/Area</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="House No./Street/Area"
          defaultValue="House No./Street/Area"
          name="area"
          label="House No./Street/Area"
          onChange={handleHouseNoChange}
          // onChange={handleInputChange}
          onBlur={(e) => handleAreaLocalityValidity(e, "area")}
        />
        {!formIsValid.area && (
          <p style={formIsValidStyles}>Enter a valid street name</p>
        )}
      </FormControl>

      <FormControl error={!formIsValid.locality}>
        <InputLabel htmlFor="patient-name">Colony/Street/ Locality</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="Colony/Street/ Locality"
          name="locality"
          defaultValue="Colony/Street/ Locality"
          label="Colony/Street/ Locality"
          onChange={handleLocalityChange}
          // onChange={handleInputChange}
          onBlur={(e) => handleAreaLocalityValidity(e, "locality")}
        />
        {!formIsValid.locality && (
          <p style={formIsValidStyles}>Enter a valid locality name</p>
        )}
      </FormControl>

      <FormControl error={!formIsValid.city}>
        <InputLabel htmlFor="patient-name">City</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="City"
          label="City"
          name="city"
          defaultValue="City"
          onChange={handleCityChange}
          // onChange={handleInputChange}
          onBlur={(e) => handleCityAndCountryValidity(e, "city")}
        />
        {!formIsValid.city && (
          <p style={formIsValidStyles}>Enter a valid city name</p>
        )}
      </FormControl>

      <FormControl error={!formIsValid.state}>
        <InputLabel htmlFor="patient-name">State</InputLabel>
        <OutlinedInput
          id="patient-name"
          defaultValue="State"
          //   value="State"
          name="state"
          label="State"
          onChange={handleStateChange}
          // onChange={handleInputChange}
          onBlur={handleStateValidity}
        />
        {!formIsValid.state && (
          <p style={formIsValidStyles}>Enter a valid state name</p>
        )}
      </FormControl>

      <FormControl error={!formIsValid.country}>
        <InputLabel htmlFor="patient-name">Country</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="Country"
          label="Country"
          name="country"
          defaultValue="country"
          onChange={handleCountryChange}
          // onChange={handleInputChange}
          onBlur={(e) => handleCityAndCountryValidity(e, "country")}
        />
        {!formIsValid.country && (
          <p style={formIsValidStyles}>Enter a valid country name</p>
        )}
      </FormControl>

      <FormControl error={!formIsValid.pincode}>
        <InputLabel htmlFor="patient-name">Pincode</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="Pincode"
          label="Pincode"
          name="pincode"
          defaultValue="Pincode"
          inputProps={{ maxLength: 6 }}
          onChange={handlePincodeChange}
          // onChange={handleInputChange}
          onBlur={handlePincodeValidity}
        />
        {!formIsValid.pincode && (
          <p style={formIsValidStyles}>Enter a valid 6 digit pincode</p>
        )}
      </FormControl>
    </>
  );
};

export default EditPatientForm;

const bloodgroup = ["A+", "A-", "B+", "AB-", "AB+", "O+", "O-"];
