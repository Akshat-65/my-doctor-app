import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";

const DiseaseSwiper = () => {
  const swiperData = [
    "Dementia",
    "Depression",
    "Diabetes",
    "Diphtheria",
    "Dyslexia",
    "Obesity",
    "Vertigo",
    "Dementia",
    "Depression",
    "Diabetes",
    "Diphtheria",
    "Dyslexia",
    "Obesity",
    "Vertigo",
    "Dementia",
    "Depression",
    "Diabetes",
    "Diphtheria",
    "Dyslexia",
    "Obesity",
    "Vertigo",
  ];


  const swiperSlideStyle ={
    marginRight: "12px",
    border: "1px solid #696969",
    cursor: "pointer",
    margin: "8px",
    textAlign: "center",
    borderRadius: "16px",
    color:'rgb(62 59 59)',
    padding:"5px",
    backgroundColor: 'transparent'
  }

  const hoverStyle = {
    backgroundColor: 'rgb(176 176 176)',
    color: 'white',
    border:'1px solid rgb(176 176 176)'
  };

  const swiperElement = swiperData.map((elem) => (
    <SwiperSlide
      style={swiperSlideStyle}
      onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, swiperSlideStyle)}
    >
      {elem}
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        style={{ display: "flex", zIndex: 1299, backgroundColor: "#F0F0F0", padding:'6px' }}
        spaceBetween={12}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3
          },
          600: {
            slidesPerView: 5
          },
          900: {
            slidesPerView: 7
          },
          1284: {
            slidesPerView: 9
          },
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
