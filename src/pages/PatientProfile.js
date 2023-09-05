import Box from "@mui/material/Box";
import SideNav from "../components/SideNav";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

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
  mt: "15px",
};

// ------------------------------------component----------------------------------------

const PatientProfile = () => {
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
          <TextField
          id="outlined-required"
          label="Name"
        />
            {/* <FormControl>
              <InputLabel htmlFor="component-outlined">Name</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                label="Name"
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="component-outlined">Phone Number</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                label="Phone Number"
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="component-outlined">Email</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                label="Email"
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="component-outlined">Gender</InputLabel>
              <OutlinedInput
                id="component-outlined"
                defaultValue=""
                label="Gender"
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="component"> Date of birth</InputLabel>
              <OutlinedInput
                id="component"
                defaultValue=" "
                label="Date of birth"
              />
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="component-outline"> Date of birth</InputLabel>
              <OutlinedInput
                id="component-outline"
                defaultValue=" "
                label="Date of birth"
              />
            </FormControl>

            
            <FormControl>
              <InputLabel htmlFor="componen"> Date of birth</InputLabel>
              <OutlinedInput
                id="componen"
                defaultValue=" "
                label="Date of birth"
              />
            </FormControl> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PatientProfile;
