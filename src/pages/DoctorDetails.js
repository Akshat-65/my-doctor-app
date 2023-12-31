import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DoctorAccordion from "../components/Doctors/DoctorAccordion";
import DoctorDetailsCard from "../components/Cards/DoctorDetailsCard";
import DoctorSlotsPanel from "../components/Doctors/DoctorSlotsPanel";

const doctorDetailsSectionStyles = {
  display: "grid",
  gridTemplateColumns: "auto",
  pl: "2rem",
  pt: "2rem",
  pr: "1rem",
};

const DoctorDetails = ({handleDoctorSlotDetails}) => {
  const [doctorsDetailsData, setDoctorsDetailsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        (elem) =>
          `${elem["position"]} at ${elem["place"]} (${elem["fromYear"]} - ${elem["toYear"]})`
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorsDetails();
  }, []);

  const loading = (
      <Typography variant="body2" sx={{ fontSize: "16px", m: "1rem" }}>
        Loading doctor details...
      </Typography>
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
        <Box component="section" sx={doctorDetailsSectionStyles}>
          {isLoading && loading}
          {!isLoading && (
            <>
              {/* card wrapper */}
              <Box sx={{ display: "flex", mb: "1rem", maxWidth: "47%" }}>
                <DoctorDetailsCard doctorsDetailsData ={doctorsDetailsData}/>
              </Box>
              {/* slots available Wrapper */}
              <Box sx={{mb: "1rem", maxWidth: "47%"}}>
                <DoctorSlotsPanel handleDoctorSlotDetails = {handleDoctorSlotDetails}/>
              </Box>                  
              {/* details wrapper */}
              <Box
                sx={{
                  mb: "1.5rem",
                  maxWidth:"100%"
                }}
              >
                <Typography sx={{ mb: "1rem" }}>
                  {doctorsDetailsData && doctorsDetailsData.consultationFee
                    ? `Consultation Fee: Rs. ${doctorsDetailsData.consultationFee}`
                    : "Consultation Fee: Not available"}
                </Typography>
                <DoctorAccordion doctorsDetailsData={doctorsDetailsData} />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetails;
