import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
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
  
  const SpecialitiesCardWrapperStyles = {
    display: "grid",
    gridTemplateColumns: {
      xs: "auto",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gap: "54px",
  };

const Speciality = () => {
    const [specializationData, setSpecializationData] = useState([]);

    const specialities = specializationData.map((elem) => (
        <Box>
          <Card variant="outlined" sx={specialitiesCardStyles}>
            <Box sx={{ width: "100px", height: "100px", borderRadius: "50%" }}>
              <img
                src={`http://my-doctors.net/${elem.image}`}
                style={{ width: "100%" }}
              />
            </Box>
            <Typography>{elem.name}</Typography>
          </Card>
        </Box>
      ));
    
      const getSpecializationData = async () => {
        try {
          const response = await fetch(
            "http://my-doctors.net:8090/specializations"
          );
          let data = await response.json();
          let returnedData = data.data;
          let totalSpecializations = data.total;
          console.log(totalSpecializations);
          returnedData = returnedData.slice(0, 6);
          console.log(returnedData);
          const details = [];
          for (let elem in returnedData) {
            details.push({
              name: returnedData[elem]["name"],
              image: returnedData[elem]["imageUrl"],
              totalSpecializations: Math.floor(totalSpecializations / 10),
            });
          }
          console.log(details);
          setSpecializationData(details);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getSpecializationData();
      }, []);
    
    
      const drawerWidth = 240;

    return ( 
        <>
        <Box component="section" sx={{ pl: "1rem", pr: "1rem" }}>
          <Box>
            <Typography variant="h4" sx={specialityHeaderStyles}>
              {specializationData.length > 0 &&
                `${specializationData[0].totalSpecializations}0+ Specialities`}
            </Typography>
          </Box>

          <Box sx={SpecialitiesCardWrapperStyles}>{specialities}</Box>
        </Box>
        </>
     );
}
 
export default Speciality;