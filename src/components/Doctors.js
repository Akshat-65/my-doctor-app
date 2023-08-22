import homePageImage from "../assets/homePageImage.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoneMarrowImage from "../assets/boneMarrow.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const specialityHeaderStyles = {
  color: "#3f51b5",
  fontSize: "42px",
  marginTop: "16px",
  fontWeight: "bold",
};

const SpecialitiesCardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "auto auto",
    md: "auto auto auto",
  },
  gap: "54px",
};

const DoctorsCardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "auto auto",
    md: "auto auto auto",
  },
  gap: "35px",
};

const specialitiesCardStyles = {
  display: "flex",
  flexDirection: "column",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
};

const doctorsCardStyles = {
  display: "flex",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const Doctors = () => {

  const specialitiesCard = (
    <React.Fragment>
      <Box sx={{ width: "100px", height: "100px", borderRadius: "50%" }}>
        <img src={BoneMarrowImage} style={{ width: "100%" }} />
      </Box>
      <Typography>Bone Marrow</Typography>
    </React.Fragment>
  );

  const doctorsCard = (
    <React.Fragment>
      <Box sx={{ display: "flex", width: "100%", justifyContent:'space-between' }}>
        <Box sx={{ width: "20%", mr:'2rem' }}>
          <Box sx={{}}>
            <AccountCircleIcon color='disabled' sx={{fontSize:'90px'}}/>
          </Box>
        </Box>

        <Box sx={{ width: "80%" , display:'flex', flexDirection:'column', mt:'0.5rem'}}>
          <Box>
            <Typography variant="subtitle2" sx={{fontWeight:'600'}}>Dr. Dusty Huel</Typography>
            <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>Master in Cardiovascular Risk Factors | Bachelor of Dental Surgery | Bachelor of Medicine </Typography>
            <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>Critical Care Medicine</Typography>
            <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>8 years experience</Typography>
          </Box>

          <Box sx={{ display: "grid", gridGap:"0.2rem 1rem", gridTemplateRows:'auto auto auto', gridTemplateColumns:'auto 1fr', mt:'1rem' }}>
              <Typography variant="h6" sx={{fontSize:'13px'}}>Hospital</Typography>
              <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>Not available</Typography>
              <Typography sx={{fontSize:'13px'}}>Languages</Typography>
              <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>Hindi, Dogri and Kashmiri</Typography>
              <Typography sx={{fontSize:'13px'}}>Next available</Typography>
              <Typography variant="body2" sx={{fontSize:'13px', color:'rgba(0, 0, 0, 0.54)'}}>Not available</Typography>
          </Box>
        </Box>
      </Box>
      
       <Box sx={{display:'flex', gap:'0.5rem', padding:'0.8rem', alignItems:'flex-start', ml:'1rem'}}>
           <Button variant="outlined" sx={{borderRadius:'25px', color:'#3f51b5', border:'1px solid rgba(63, 81, 181, 0.5)', fontSize:'0.8125rem'}}>BOOK APPOINTMENT</Button>
        </Box>
    </React.Fragment>
  );
  return (
    <>
      <img
        src={homePageImage}
        style={{ width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }}
      />
      <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
        <Box>
          <Typography variant="h4" sx={specialityHeaderStyles}>
            30+ Specialities
          </Typography>
        </Box>

        <Box sx={SpecialitiesCardWrapperStyles}>
          <Box>
            <Card variant="outlined" sx={specialitiesCardStyles}>
              {specialitiesCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={specialitiesCardStyles}>
              {specialitiesCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={specialitiesCardStyles}>
              {specialitiesCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={specialitiesCardStyles}>
              {specialitiesCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={specialitiesCardStyles}>
              {specialitiesCard}
            </Card>
          </Box>
        </Box>

        <Box sx={{ pt: "1rem", textAlign: "end" }}>
          <Typography sx={{ mr: "1.3rem", fontSize: "18px" }}>
            View all Specialities...
          </Typography>
        </Box>
      </Box>

      <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
        <Box>
          <Typography variant="body1">430+ Doctors</Typography>
        </Box>

        <Box sx={DoctorsCardWrapperStyles}>
          <Box>
            <Card variant="outlined" sx={doctorsCardStyles}>
              {doctorsCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={doctorsCardStyles}>
              {doctorsCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={doctorsCardStyles}>
              {doctorsCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={doctorsCardStyles}>
              {doctorsCard}
            </Card>
          </Box>
          <Box>
            <Card variant="outlined" sx={doctorsCardStyles}>
              {doctorsCard}
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Doctors;
