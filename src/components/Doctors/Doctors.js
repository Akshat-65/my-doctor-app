import homePageImage from "../../assets/Images/homePageImage.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DoctorsCard from "../Cards/DoctorsCard";

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
const specialitiesCardStyles = {
  display: "flex",
  flexDirection: "column",
  p: "1rem",
  gap: "2rem",
  alignItems: "center",
  justifyContent: "center",
};
const DoctorsCardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "1fr 1fr",
    lg: "1fr 1fr 1fr",
  },
  gridTemplateRows: "maxContent",
  gap: "35px",
};

const Doctors = () => {
  const [specializationData, setSpecializationData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const doctorsPerPage = 12;
  let pages;
  // if (doctorsData.length > 0) {
  //   pages = doctorsData[0]?.totalDoctors;
  //   console.log(pages);
  // }

  pages = Math.ceil((doctorsData[0]?.totalDoctors * 10) / doctorsPerPage);
  let startPageData = page * doctorsPerPage - doctorsPerPage;
  let endPageData = startPageData + doctorsPerPage;

  const requiredDoctorsPerPage = doctorsData.slice(startPageData, endPageData);

  const handleDoctorsPageChange = (event, value) => {
    setPage(value);
  };

  const getSpecializationData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://my-doctors.net:8090/specializations?$limit=56&$skip=0"
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
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getDoctorsData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://my-doctors.net:8090/doctors?$limit=56&$skip=0"
      );
      let data = await response.json();
      let returnedData = data.data;
      let totalDoctors = data.total;
      console.log(totalDoctors);
      const details = [];
      for (let elem in returnedData) {
        details.push({
          id: returnedData[elem]["_id"],
          name: `${returnedData[elem]["firstName"]} ${returnedData[elem]["lastName"]}`,
          qualifications: returnedData[elem]?.profile?.["qualifications"]?.map(
            (elem) => elem["name"]
          ),
          specialities: returnedData[elem]?.profile?.["specialities"]?.map(
            (elem) => elem["name"]
          ),
          experience: returnedData[elem]?.profile?.experienceMonths,
          hospital: returnedData[elem]?.profile?.["experience"]?.map((elem) => {
            if (!elem.toYear) {
              return elem.place;
            }
          }),
          languages: returnedData[elem]?.profile?.["languages"]?.map(
            (elem) => elem
          ),
          totalDoctors: Math.floor(totalDoctors / 10),
        });
      }
      console.log(details);
      setDoctorsData(details);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecializationData();
    getDoctorsData();
  }, []);

  const handleSpecialityDetail = (speciality) => {
    navigate(`/search?sp=${speciality}`);
  };

  const specialities = specializationData.map((elem) => (
    <Box
      onClick={() => handleSpecialityDetail(elem.name)}
      sx={{ cursor: "pointer" }}
    >
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

  const loading = (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "1rem",
      }}
    >
      <CircularProgress />
    </Box>
  );

  return (
    <Box sx={{ pl: "1rem", pr: "1rem" }}>
      <img
        src={homePageImage}
        style={{ width: "100%", paddingLeft: "1rem", paddingRight: "1rem" }}
      />
      {isLoading && loading}
      {!isLoading && <>
        <Box component="section">
        <Box>
          <Typography variant="h4" sx={specialityHeaderStyles}>
            {specializationData.length > 0 &&
              `${specializationData[0].totalSpecializations}0+ Specialities`}
          </Typography>
        </Box>

        <Box sx={SpecialitiesCardWrapperStyles}>{specialities}</Box>

        <Box sx={{ textAlign: { xs: "center", md: "end" }, pt: "1rem" }}>
          <Link
            href="/specialities"
            underline="none"
            sx={{
              mr: "1.3rem",
              color: "black",
              textTransform: "initial",
              fontSize: "18px",
            }}
          >
            View all Specialities...
          </Link>
        </Box>
      </Box>

      <Box component="section">
        <Box>
          <Typography variant="body1">
            {doctorsData.length > 0 &&
              `${doctorsData[0].totalDoctors}0+ Doctors`}
          </Typography>
        </Box>

        <Box sx={DoctorsCardWrapperStyles}>
          <DoctorsCard doctorsData={requiredDoctorsPerPage} />
        </Box>

        <Pagination
          sx={{ display: "flex", mt: "16px", justifyContent: "center" }}
          size="small"
          count={pages}
          page={page}
          onChange={handleDoctorsPageChange}
          variant="outlined"
          color="primary"
        />
      </Box></>}
      
    </Box>
  );
};

export default Doctors;
