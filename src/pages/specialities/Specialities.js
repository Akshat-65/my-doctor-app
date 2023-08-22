import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import homePageImage from "../../assets/homePageImage.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoneMarrowImage from "../../assets/boneMarrow.svg";
import { useEffect, useState } from "react";

const specialitiesCardStyles = {
  display: "flex",
  flexDirection: "column",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
};
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

const Specialities = () => {
  const specialitiesCard = (
    <React.Fragment>
      <Box sx={{ width: "100px", height: "100px", borderRadius: "50%" }}>
        <img src={BoneMarrowImage} style={{ width: "100%" }} />
      </Box>
      <Typography>Bone Marrow</Typography>
    </React.Fragment>
  );
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
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
      </Box>
    </Box>
  );
};

export default Specialities;
