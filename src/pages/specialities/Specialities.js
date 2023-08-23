import * as React from "react";
import Box from "@mui/material/Box";
import SideNav from "../../components/SideNav";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";
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

const Specialities = () => {
  const drawerWidth = 240;
  const [specializationData, setSpecializationData] = useState([]);
  const [page, setPage] = React.useState(1);

  const SpecialitiesPerPage = 6;
  let pages;
  // if (specializationData.length > 0) {
  //   pages = (specializationData[0]?.totalSpecializations);
  //   console.log(pages);
  // }

  pages = Math.ceil(
    (specializationData[0]?.totalSpecializations * 10) / SpecialitiesPerPage
  );
  let startPageData = page * SpecialitiesPerPage - SpecialitiesPerPage;
  let endPageData = startPageData + SpecialitiesPerPage;

  const handleSpecialitiesPageChange = (event, value) => {
    setPage(value);
  };
  const requiredSpecialitiesPerPage = specializationData.slice(
    startPageData,
    endPageData
  );

  const specialities = requiredSpecialitiesPerPage.map((elem) => (
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" sx={specialityHeaderStyles}>
              {specializationData.length > 0 &&
                `${specializationData[0].totalSpecializations}0+ Specialities`}
            </Typography>

            <Box>
              <TextField
                id="outlined-basic"
                placeholder="Search a Speciality"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="search specialities">
                    <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>

          <Box sx={SpecialitiesCardWrapperStyles}>{specialities}</Box>
          <Pagination
            sx={{ display: "flex", mt: "16px", justifyContent: "center" }}
            size="small"
            count={pages}
            page={page}
            onChange={handleSpecialitiesPageChange}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Specialities;
