import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import MenuItem from "@mui/material/MenuItem";
import languages_list from "../../data/languages";

const inputFieldWrapperStyles = {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    width: "100%",
    gap: "12px",
    mb: "10px",
    mt: "10px",
    p: "12px",
  };


const EditDoctorProfileForm = ({
    handleInputChange,
    languageChange,
    editable,
    name,
    fees,
    contact,
    gender,
    email,
    languages,
    bio
}) => {

    return ( 
        <>
        <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="doctorName"
                disabled={!editable}
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                value={name || ""}
              />
              <TextField
                id="outlined-basic"
                label="Constultant Fee"
                variant="outlined"
                name="fees"
                disabled={!editable}
                sx={{ width: "80%" }}
                required
                onChange={handleInputChange}
                value={fees}
              />
            </Box>
            <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="contact"
                disabled={!editable}
                style={{ width: "80%" }}
                onChange={handleInputChange}
                value={contact}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Gender"
                name="gender"
                defaultValue="male"
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                disabled={!editable}
                value={gender}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Box>
            <Box sx={inputFieldWrapperStyles}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                disabled={!editable}
                sx={{ width: "80%" }}
                onChange={handleInputChange}
                value={email}
              />
              <Autocomplete
                multiple
                id="tags-outlined"
                options={languages_list}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                value={languages.map((item) => item)}
                required
                disabled={!editable}
                onChange={languageChange}
                style={{ width: "80%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Languages"
                    placeholder="Enter Languages"
                  />
                )}
              />
            </Box>
            <Box
              sx={{ ...inputFieldWrapperStyles, gridTemplateColumns: "1fr" }}
            >
              <TextField
                id="outlined-basic"
                label="Bio"
                variant="outlined"
                name="bio"
                multiline
                minRows={4}
                disabled={!editable}
                sx={{ width: "90%" }}
                required
                onChange={handleInputChange}
                value={bio}
              />
            </Box>
        </>
     );
}
 
export default EditDoctorProfileForm;