import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";

const EditPatientForm = ({
  user,
  name,
  gender,
//   patientData,
//   handleNameChange,
//   handleGender,
//   handleBloodgroup,
//   handleHouseNo,
//   handleLocality,
//   handleCity,
//   handleState,
//   handleCountry,
//   handlePincode,
patientData,
  handleInput
}) => {
  const genderOptions = [
    { value: "Male" },
    { value: "Female" },
    { value: "Other" },
  ];

  const handleInputChange = (e,name,value)=>{
handleInput(e,name,value)
  }

//   const handleInputNameChange = (e) => {
//     handleNameChange(e);
//   };

//   const handleGenderChange = (e) => {
//     handleGender(e);
//   };

//   const handleBloodgroupChange = (e, value) => {
//     handleBloodgroup(e, value);
//   };

//   const handleHouseNoChange = (e) => {
//     handleHouseNo(e);
//   };

//   const handleLocalityChange = (e) => {
//     handleLocality(e);
//   };

//   const handleCityChange = (e) => {
//     handleCity(e);
//   };

//   const handleStateChange = (e) => {
//     handleState(e);
//   };

//   const handleCountryChange = (e) => {
//     handleCountry(e);
//   };

//   const handlePincodeChange = (e) => {
//     handlePincode(e);
//   };

  return (
    <>
      <FormControl>
        <InputLabel htmlFor="patient-name">Name</InputLabel>
        <OutlinedInput
          id="patient-name"
          defaultValue={name}
          label="Name"
          name="name"
        //   onChange={handleInputNameChange}
        onChange={handleInputChange}
        />
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
        // onChange={handleGenderChange}
        onChange={handleInputChange}
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
        value={patientData.profile.bloodType}
        // onChange={handleBloodgroupChange}
        onChange={(e, newValue) => handleInputChange(e,"bloodType", newValue)}
        renderInput={(params) => <TextField {...params} label="Bloodgroup" />}
      />

      <FormControl>
        <InputLabel htmlFor="patient-name">House No./Street/Area</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="House No./Street/Area"
          defaultValue="House No./Street/Area"
          name="area"
          label="House No./Street/Area"
        //   onChange={handleHouseNoChange}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">Colony/Street/ Locality</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="Colony/Street/ Locality"
          name="locality"
          defaultValue="Colony/Street/ Locality"
          label="Colony/Street/ Locality"
        //   onChange={handleLocalityChange}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">City</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="City"
          label="City"
          name="city"
          defaultValue="City"
        //   onChange={handleCityChange}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">State</InputLabel>
        <OutlinedInput
          id="patient-name"
          defaultValue="State"
          //   value="State"
          name="state"
          label="State"
        //   onChange={handleStateChange}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">Country</InputLabel>
        <OutlinedInput
          id="patient-name"
          //   value="Country"
          label="Country"
          name="country"
          defaultValue="country"
        //   onChange={handleCountryChange}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="patient-name">Pincode</InputLabel>
        <OutlinedInput
          id="patient-name"
        //   value="Pincode"
          label="Pincode"
          name="pincode"
          defaultValue="Pincode"
        //   onChange={handlePincodeChange}
        onChange={handleInputChange}
        />
      </FormControl>
    </>
  );
};

export default EditPatientForm;

const bloodgroup = ["A+", "A-", "B+", "AB-", "AB+", "O+", "O-"];
