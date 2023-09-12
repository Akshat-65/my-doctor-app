import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
  isEditable,
  validateName,
  formIsValid,
  validateAreaAndLocality,
  validateCityAndCountry,
  validateState,
  validatePincode,
  handleDob,
}) => {
  const genderOptions = [
    { value: "Male" },
    { value: "Female" },
    { value: "Other" },
  ];

  const handleNameValidity = (e) => {
    validateName(e);
  };

  const handleAreaLocalityValidity = (e, fieldName) => {
    validateAreaAndLocality(e, fieldName);
  };

  const handleCityAndCountryValidity = (e, fieldName) => {
    validateCityAndCountry(e, fieldName);
  };

  const handleStateValidity = (e) => {
    validateState(e);
  };

  const handlePincodeValidity = (e) => {
    validatePincode(e);
  };

  const handleInputNameChange = (e) => {
    handleNameChange(e);
  };

  const handleGenderChange = (e) => {
    handleGender(e);
  };

  const handleDobChange = (value) => {
    handleDob(value);
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

  console.log("vhgsahs", patientData);

  return (
    <>
      <FormControl error={!formIsValid.name}>
        <InputLabel htmlFor="patient-name">Name</InputLabel>
        <OutlinedInput
          disabled={!isEditable}
          id="patient-name"
          defaultValue={name}
          label="Name"
          name="name"
          onChange={handleInputNameChange}
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
        disabled={!isEditable}
        defaultValue={gender}
        onChange={handleGenderChange}
      >
        {genderOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

      {/* <FormControl>
        <InputLabel htmlFor="patient-name">Date of birth</InputLabel>
        <OutlinedInput
          id="patient-name"
          name="dob"
          disabled={!isEditable}
          value={user.user.profile.dob}
          label="Date of birth"
        />
      </FormControl> */}

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}  sx={{p:0, overflow:"visible"}}>
          <DatePicker
          sx={{width:"100%"}}
            disabled={!isEditable}
            fullWidth
            label="Date of birth"
            value={patientData.profile.dob}
            format="DD-MM-YYYY"
            onChange={(newValue) => handleDobChange(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>

      <Autocomplete
        disablePortal
        id="combo-box-demo"
        fullWidth
        options={bloodgroup}
        disabled={!isEditable}
        name="bloodType"
        value={patientData.bloodType}
        onChange={(e, value) => handleBloodgroupChange(e, value)}
        renderInput={(params) => <TextField {...params} label="Bloodgroup" />}
      />

      <FormControl error={!formIsValid.area}>
        <InputLabel htmlFor="patient-name">House No./Street/Area</InputLabel>
        <OutlinedInput
          id="patient-name"
          value={patientData.profile.address.area}
          name="area"
          label="House No./Street/Area"
          disabled={!isEditable}
          onChange={handleHouseNoChange}
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
          name="locality"
          value={patientData.profile.address.locality}
          label="Colony/Street/ Locality"
          disabled={!isEditable}
          onChange={handleLocalityChange}
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
          label="City"
          disabled={!isEditable}
          name="city"
          value={patientData.profile.address.city}
          onChange={handleCityChange}
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
          value={patientData.profile.address.state}
          name="state"
          label="State"
          disabled={!isEditable}
          onChange={handleStateChange}
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
          label="Country"
          name="country"
          disabled={!isEditable}
          value={patientData.profile.address.country}
          onChange={handleCountryChange}
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
          label="Pincode"
          name="pincode"
          disabled={!isEditable}
          value={patientData.profile.address.pincode}
          inputProps={{ maxLength: 6 }}
          onChange={handlePincodeChange}
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
