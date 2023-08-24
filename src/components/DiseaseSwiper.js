import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const DiseaseSwiper = () => {
  const swiperData = [
    'Dementia',
    'Depression',
    'Diabetes',
    'Diphtheria',
    'Dyslexia',
    'Obesity',
    'Vertigo',
    'Dementia',
    'Depression',
    'Diabetes',
    'Diphtheria',
    'Dyslexia',
    'Obesity',
    'Vertigo',
    'Dementia',
    'Depression',
    'Diabetes',
    'Diphtheria',
    'Dyslexia',
    'Obesity',
    'Vertigo',
  ];

  const swiperElement = swiperData.map((elem) => (
    <SwiperSlide>
      <Box>
        <Typography>{elem}</Typography>
      </Box>
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper style={{zIndex:1299, backgroundColor:'red'}}
        slidesPerView={8}
        spaceBetween={2}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {swiperElement}
      </Swiper>
    </>
  );
};

export default DiseaseSwiper;
