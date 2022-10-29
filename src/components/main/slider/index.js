import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, EffectFade, Pagination } from "swiper";

export default function Slider() {
  return (
    <Grid container sx={{ height: { xs: "50vh", md: "90vh" } }}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box component="img" src="/dress.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src="/shoes.jpg" />
        </SwiperSlide>
      </Swiper>
    </Grid>
  );
}
