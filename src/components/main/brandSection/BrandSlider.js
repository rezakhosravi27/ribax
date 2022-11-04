import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const styles = {
  swiper: {
    width: "100%",
    height: "100%",
    padding: "2rem .2rem ",
  },
  swiperSlide: {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: "50%",
    width: "50%",
  },
};

const data = [
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2015/01/logo-3.png",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2015/01/logo-2.png",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2015/01/logo-4.png",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2015/01/logo-6.png",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2015/01/logo-1.png",
  },
];

export default function BrandSlider() {
  return (
    <Grid item sx={{ height: "auto", mt: 8 }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2.5,
          },
          700: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
        }}
        modules={[]}
        style={styles.swiper}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide style={styles.swiperSlide} key={index}>
              <Box component="img" style={styles.img} src={item.src} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
