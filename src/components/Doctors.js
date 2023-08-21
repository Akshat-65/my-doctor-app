import homePageImage from "../assets/homePageImage.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoneMarrowImage from "../assets/boneMarrow.svg";
import { useEffect, useState } from "react";

const specialityHeaderStyles = {
  color: "#3f51b5",
  fontSize: "42px",
  marginTop: "16px",
  fontWeight: "bold",
};

const cardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "auto auto",
    md: "auto auto auto",
  },
  gap: "54px",
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
  useEffect(() => {});

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
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "20%" }}>
          <Box sx={{ width: "80px", height: "80", borderRadius: "50%" }}>
            <img src={BoneMarrowImage} style={{ width: "100%" }} />
          </Box>
        </Box>

        <Box sx={{ width: "80%" }}>
          <Box>
            <Typography variant="h6">Dr. Dusty Huel</Typography>
            <Typography>Master in Cardiovascular Risk Factors</Typography>
            <Typography>Bachelor of Dental Surgery</Typography>
            <Typography>Bachelor of Medicine</Typography>
            <Typography>Critical Care Medicine</Typography>
            <Typography>8 years experience</Typography>
          </Box>

          <Box sx={{ display: 'flex' ,width: "100%" }}>
            <Box sx={{ width: "50%" ,display: 'flex', flexDirection:'column'}}>
              <Typography variant="h6">Hospital</Typography>
              <Typography>Languages</Typography>
              <Typography>Next available</Typography>
            </Box>

            <Box sx={{ width: "50%" ,display: 'flex', flexDirection:'column'}}>
              <Typography>Master in Cardiovascular Risk Factors</Typography>
              <Typography>Bachelor of Medicine</Typography>
              <Typography>8 years experience</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>jjkn</Box>
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

        <Box sx={cardWrapperStyles}>
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

        <Box sx={cardWrapperStyles}>
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
