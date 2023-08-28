import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DoctorAccordion from "../../components/DoctorAccordion";

const doctorDetailsSectionStyles = {
  display: "grid",
//   display: "flex",
  gridTemplateColumns: 'auto',
//   flexDirection: "column",
  pl: "2rem",
  pt: "2rem",
  pr: "1rem",
//   width: "100%",
//   alignItems: "flex-start",
};

const DoctorDetails = () => {
  const [doctorsDetailsData, setDoctorsDetailsData] = useState([]);
  const drawerWidth = 240;

  const { id } = useParams();
  console.log(id);

  const getDoctorsDetails = async () => {
    try {
      const response = await fetch(`http://my-doctors.net:8090/doctors/${id}`);
      let data = await response.json();
      console.log(data);
      let returnedData = data;
      const details = {};

      details[
        "name"
      ] = `${returnedData["firstName"]} ${returnedData["lastName"]}`;
      details["specialities"] = returnedData?.profile?.["specialities"]?.map(
        (elem) => elem["name"]
      );
      details["qualifications"] = returnedData?.profile?.[
        "qualifications"
      ]?.map((elem) => elem["name"]);
      details["experience"] = returnedData?.profile?.["experience"]?.map(
        (elem) => `${elem["position"]} at ${elem["place"]} (${elem["fromYear"]} - ${elem["toYear"]})`
      );
      details["languages"] = returnedData?.profile?.["languages"]?.map(
        (elem) => elem
      );
      details["reviews"] = "No reviews available";
      details["averageRating"] = returnedData?.profile?.averageRating;
      details["experienceMonths"] = returnedData?.profile?.experienceMonths;
      details["consultationFee"] = returnedData?.profile?.consultationFee;
      details["bio"] = returnedData?.profile?.bio;
      details["languages"] = returnedData?.profile?.["languages"]?.map(
        (elem) => elem
      );
      console.log(details);
      setDoctorsDetailsData(details);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getDoctorsDetails();
  }, []);

  const doctorDetailsCard = (
    <Card
      sx={{ p: "1rem", boxShadow: 2, minWidth: { xs: "250px", sm: "480px" } }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            <img src="" alt={doctorsDetailsData.name} />
          </Avatar>
        }
        title={`Dr. ${doctorsDetailsData.name}`}
        subheader={
          doctorsDetailsData["experienceMonths"] &&
          doctorsDetailsData["experienceMonths"]
            ? `${Math.floor(
                doctorsDetailsData.experienceMonths / 12
              )} Years of experience`
            : "No experience"
        }
        sx={{ mb: "1rem" }}
      />
      <CardContent sx={{ mb: "1rem" }}>
        <Typography variant="body2" color="text.secondary">
          {doctorsDetailsData && doctorsDetailsData.bio
            ? `${doctorsDetailsData.bio}`
            : "Bio not available"}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

// const doctorDetailsKeys = Object.keys(doctorsDetailsData);
//   console.log(doctorDetailsKeys);

//   doctorDetailsKeys.map((elem)=>{
//     if(elem!=='name' && elem!=='experienceMonths' && elem!=="consultationFee" && elem!=='bio' ){
//         return(
//             <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>{elem}</Typography>
//         </AccordionSummary>
//          <AccordionDetails>
//           <Typography>
//             {Array.isArray(details[elem]) ? (
//               <ul>
//                 {details[elem] && details[elem].map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             ) : (
//               details[key]
//             )}
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//         )
//     }
//   })


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
        <Box component="section" sx={doctorDetailsSectionStyles}>
          {/* card wrapper */}
          <Box sx={{ display: "flex", mb: "1rem", maxWidth: "47%" }}>
            {doctorDetailsCard}
          </Box>
          {/* No slots available Wrapper */}
          <Box sx={{ mb: "1rem" }}>
            <Typography variant="body1"> No slots Available</Typography>
          </Box>
          {/* details wrapper */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "90%", mb:'1.5rem' }}>
            <Typography sx={{ mb: "1rem" }}>
              {doctorsDetailsData && doctorsDetailsData.consultationFee
                ? `Consultation Fee: Rs. ${doctorsDetailsData.consultationFee}`
                : "Consultation Fee: Not available"}
            </Typography>
            <DoctorAccordion doctorsDetailsData = {doctorsDetailsData}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetails;
