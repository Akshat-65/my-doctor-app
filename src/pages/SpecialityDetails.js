import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../components/UIComponents/SideNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import CircularProgress from "@mui/material/CircularProgress";
import Select from "@mui/material/Select";
import DoctorsCard from "../components/Cards/DoctorsCard";

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

const specialityDropdownWrapper = {
  display: "flex",
  flexDirection: { xs: "column", sm: "row" },
  alignItems: { xs: "flex-start", sm: "center" },
  justifyContent: "space-between",
};

const SpecialityDetails = () => {
  const [doctorsDatas, setDoctorsDatas] = useState([]);
  const [itemsPerPageFilter, SetItemsPerPageFilter] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  console.log(isLoading);

  const location = useLocation();
  console.log(location.search);
  console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const speciality = searchParams.get("sp");
  const name = searchParams.get("q");

  console.log(speciality);
  console.log(name);

  const drawerWidth = 240;
  const itemsPerPage = [9, 12, 18, 30];

  let startPageData = 0;
  let endPageData = itemsPerPageFilter;
  const requiredDoctorsPerPage = doctorsDatas.slice(startPageData, endPageData);

  const handleSpecialityDetail = () => {
    console.log(speciality);
    const paramObject = {};
    if (speciality) {
      paramObject.speciality = speciality;
    }
    if (name) {
      paramObject.name = name;
    }

    const params = new URLSearchParams(paramObject);
    console.log(params);

    const getSpecializationData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://my-doctors.net:8090/doctors?$limit=56&$skip=0&${params}`
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
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getSpecializationData();
  };

  useEffect(() => {
    setIsLoading(true);
    handleSpecialityDetail();
  }, [speciality, name]);

  const handleItemsPerPageFilter = (e) => {
    SetItemsPerPageFilter(e.target.value);
  };

  let noResultText = "";

  if (speciality && name) {
    noResultText = `No results found for '${name}' in '${speciality}'`;
  } else if (speciality) {
    noResultText = `No results found for '${speciality}' `;
  } else if (name) {
    noResultText = `No results found for '${name}' `;
  }

  const noResults = (
    <Typography
      variant="body2"
      sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.54)", mb: "0.5rem" }}
    >
      {noResultText}
    </Typography>
  );

  let loadingText = "";
  if (speciality && name) {
    loadingText = `Searching for : '${name}' in '${speciality}'`;
  } else if (speciality) {
    loadingText = `Searching for : '${speciality}' `;
  } else if (name) {
    loadingText = `Searching for : '${name}' `;
  }

  const loading = (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CircularProgress size="1.4rem" />
      <Typography variant="body2" sx={{ fontSize: "16px", m: "1rem" }}>
        {loadingText}
      </Typography>
    </Box>
  );
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
        <Box component="section" sx={{ p: "0 2rem 2rem 2rem" }}>
          {isLoading && loading}
          {!isLoading && doctorsDatas.length > 0 && (
            <>
              <Box sx={specialityDropdownWrapper}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: "1.25rem", mb: "0.5rem" }}
                  >
                    {doctorsDatas.length > 0 &&
                      `Showing results for : '${speciality}'`}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0, 0, 0, 0.54)",
                      mb: "0.5rem",
                    }}
                  >
                    {doctorsDatas.length > 0 &&
                      `${doctorsDatas.length} doctors found`}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: "1rem" }}>
                  <FormControl variant="standard" sx={{ minWidth: 120 }}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Items per page
                    </InputLabel>
                    <NativeSelect
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={itemsPerPageFilter}
                      onChange={handleItemsPerPageFilter}
                      size="small"
                      autoWidth
                    >
                      {itemsPerPage.map((count) => (
                        <option value={count}>{count}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Box>
              <Box sx={DoctorsCardWrapperStyles}>
                {doctorsDatas.length > 0 && (
                  <DoctorsCard doctorsData={requiredDoctorsPerPage} />
                )}
              </Box>
            </>
          )}
          {!isLoading && !doctorsDatas.length > 0 && noResults}
        </Box>
      </Box>
    </Box>
  );
};

export default SpecialityDetails;
