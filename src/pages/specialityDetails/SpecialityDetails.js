import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import { specialityHeaderDropdownWrapper } from "../specialities/Specialities";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DoctorsCard from "../../components/DoctorsCard";

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

const SpecialityDetails = () => {
  const [doctorsDatas, setDoctorsDatas] = useState([]);
  const [itemsPerPageFilter, SetItemsPerPageFilter] = useState(12);

  const location = useLocation();
  console.log(location.search);
  const searchParams = new URLSearchParams(location.search);
  const speciality = searchParams.get("sp");
  console.log(speciality);

  const drawerWidth = 240;
  const itemsPerPage = [9, 12, 18, 30];
  let startPageData = 0;
  let endPageData = itemsPerPageFilter;

  const handleSpecialityDetail = (speciality) => {
    console.log(speciality);

    const paramObject = {
      speciality: speciality,
    };

    const params = new URLSearchParams(paramObject);
    console.log(params);

    const getSpecializationData = async () => {
      try {
        const response = await fetch(
          `http://my-doctors.net:8090/doctors?${params}`
        );
        let data = await response.json();
        console.log(data);
        let returnedData = data.data;
        let totalDoctors = data.total;
        console.log(totalDoctors);
        const details = [];
        for (let elem in returnedData) {
          details.push({
            id: returnedData[elem]["_id"],
            name: `${returnedData[elem]["firstName"]} ${returnedData[elem]["lastName"]}`,
            qualifications: returnedData[elem]?.profile?.[
              "qualifications"
            ]?.map((elem) => elem["name"]),
            specialities: returnedData[elem]?.profile?.["specialities"]?.map(
              (elem) => elem["name"]
            ),
            experience: returnedData[elem]?.profile?.experienceMonths,
            hospital: returnedData[elem]?.profile?.["experience"]?.map(
              (elem) => {
                if (!elem.toYear) {
                  return elem.place;
                }
              }
            ),
            languages: returnedData[elem]?.profile?.["languages"]?.map(
              (elem) => elem
            ),
            totalDoctors: Math.floor(totalDoctors / 10),
          });
        }
        console.log(details);
        setDoctorsDatas(details);
      } catch (error) {
        console.log(error);
      }
    };
    getSpecializationData();
  };

  useEffect(() => {
    handleSpecialityDetail(speciality);
  }, []);

  const handleItemsPerPageFilter = (e) => {
    SetItemsPerPageFilter(e.target.value);
  };

  console.log(doctorsDatas);
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
          <Box sx={specialityHeaderDropdownWrapper}>
            <Box sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h4">
              {doctorsDatas.length > 0 &&
                `Showing results for : '${speciality}'`}
            </Typography>
            <Typography>{doctorsDatas.length>0 && `${doctorsDatas.length} doctors found`}</Typography>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Items per page
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={itemsPerPageFilter}
                  onChange={handleItemsPerPageFilter}
                  size="small"
                  autoWidth
                >
                  {itemsPerPage.map((count) => (
                    <MenuItem value={count} sx={{ minWidth: 70 }}>
                      {count}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
         <Box sx={DoctorsCardWrapperStyles}>
         {doctorsDatas.length > 0 &&  <DoctorsCard doctorsData= {doctorsDatas}/>}
         </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SpecialityDetails;
