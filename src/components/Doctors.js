import homePageImage from "../assets/homePageImage.svg";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BoneMarrowImage from "../assets/boneMarrow.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useState } from "react";

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

const DoctorsCardWrapperStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "auto",
    sm: "1fr 1fr",
    md: "1fr 1fr 1fr",
  },
  gridTemplateRows: "maxContent",
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
  const [specializationData, setSpecializationData] = useState([]);
  const [doctorsData, setDoctorsData] = useState([]);

  const getSpecializationData = async () => {
    try {
      const response = await fetch(
        "http://my-doctors.net:8090/specializations"
      );
      let data = await response.json();
      let returnedData = data.data;
      returnedData = returnedData.slice(0, 6);
      console.log(returnedData);
      const details = [];
      for (let elem in returnedData) {
        details.push({
          name: returnedData[elem]["name"],
          image: returnedData[elem]["imageUrl"],
        });
      }
      console.log(details);
      setSpecializationData(details);
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorsData = async () => {
    try {
      const response = await fetch("http://my-doctors.net:8090/doctors");
      let data = await response.json();
      let returnedData = data.data;
      const details = [];
      for (let elem in returnedData) {
        details.push({
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
        });
      }
      console.log(details);
      setDoctorsData(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSpecializationData();
    getDoctorsData();
  }, []);

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

  const doctors = doctorsData.map((elem) => (
    <Box>
      <Card variant="outlined" sx={doctorsCardStyles}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "20%", mr: "2rem" }}>
            <Box sx={{}}>
              <AccountCircleIcon color="disabled" sx={{ fontSize: "90px" }} />
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              mt: "0.5rem",
            }}
          >
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                {elem.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                {elem.qualifications &&
                  elem.qualifications.map((item) => item).join(" | ")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                {elem.specialities &&
                  elem.specialities.map((item) => item).join(" | ")}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                {elem.experience &&
                  `${Math.floor(elem.experience / 12)} years experience`}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridGap: "0.2rem 1rem",
                gridTemplateRows: "auto auto auto",
                gridTemplateColumns: "auto 1fr",
                mt: "1rem",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "13px" }}>
                Hospital
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                {elem.hospital && elem.hospital.map((item) => item && item)}
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>Languages</Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                {elem.languages &&
                  elem.languages.map((item) => item).join(", ")}
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>Next available</Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "13px", color: "rgba(0, 0, 0, 0.54)" }}
              >
                Not available
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
            padding: "0.8rem",
            alignItems: "flex-start",
            ml: "1rem",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: "25px",
              color: "#3f51b5",
              border: "1px solid rgba(63, 81, 181, 0.5)",
              fontSize: "0.8125rem",
            }}
          >
            BOOK APPOINTMENT
          </Button>
        </Box>
      </Card>
    </Box>
  ));

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

        <Box sx={SpecialitiesCardWrapperStyles}>{specialities}</Box>

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
          {doctors}
        </Box>
      </Box>
    </>
  );
};

export default Doctors;
