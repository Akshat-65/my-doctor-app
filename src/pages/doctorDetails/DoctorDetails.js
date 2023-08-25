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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
      details["qualifications"] = returnedData?.profile?.[
        "qualifications"
      ]?.map((elem) => elem["name"]);
      details["specialities"] = returnedData?.profile?.["specialities"]?.map(
        (elem) => elem["name"]
      );
      details["experienceMonths"] = returnedData?.profile?.experienceMonths;
      details["experience"] = returnedData?.profile?.["experience"]?.map(
        (elem) => `${elem["position"]} at ${elem["place"]}`
      );
      details["consultationFees"] = returnedData?.profile?.consultationFees;
      details["averageRating"] = returnedData?.profile?.averageRating;
      details["bio"] = returnedData?.profile?.bio;
      details["languages"] = returnedData?.profile?.["languages"]?.map(
        (elem) => elem
      );
      details["reviews"] = "No reviews available";
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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            <img src="" alt = {doctorsDetailsData.name}/>
          </Avatar>
        }
        title={`Dr. ${doctorsDetailsData.name}`}
        subheader={doctorsDetailsData['experienceMonths'] && doctorsDetailsData['experienceMonths'] ? `${Math.floor(doctorsDetailsData.experienceMonths / 12)} Years of experience` : 'No experience'}

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {doctorsDetailsData && doctorsDetailsData.bio? `${doctorsDetailsData.bio}`:"Bio not available"}
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
          {/* card wrapper */}
          <Box>
          {doctorDetailsCard}
          </Box>
          {/* No slots available Wrapper */}
          <Box></Box>
          {/* details wrapper */}
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetails;
