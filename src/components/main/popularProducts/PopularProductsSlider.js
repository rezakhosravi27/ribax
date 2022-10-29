import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Grid, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    height: "70%",
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#EEF1FF",
    },
  },
  body: {
    display: "flex",
    justifyContent: "flex-start",
    height: "20%",
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: ".5rem",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    height: "10%",
    width: "100%",
    justifyContent: "flex-end",
  },
}));

const data = [
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/62b5fb190b3488298b1b0c7621e6598b8fd6e08f_1640415501-300x300.jpg",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/2aaa9d133bea4662535cf608eb5a4a0968928c3b_1632326159-300x300.jpg",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/f571bc2f6d12aacee816c98f4132fa8d97ca6644_1637594507-300x300.jpg",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/7ae6922f182b7d8f3ca8d132378284b3c9ee3d42_1612351950-300x300.jpg",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/2aaa9d133bea4662535cf608eb5a4a0968928c3b_1632326159-300x300.jpg",
  },
  {
    src: "https://demo.brozwp.ir/reebox/wp-content/uploads/2022/10/62b5fb190b3488298b1b0c7621e6598b8fd6e08f_1640415501-300x300.jpg",
  },
];

export default function PopularProductsSlider() {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{ height: { xs: "50vh", md: "60vh" }, my: 3, cursor: "grab" }}
    >
      <Swiper
        style={{ width: "100%", height: "100%" }}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4.5,
          },
        }}
        slidesPerView={4.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {data.map((slide, index) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                backgroundColor: "#fff",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box component="div" className={classes.imgContainer}>
                <Box component="img" src={slide.src} />
              </Box>
              <Box component="div" className={classes.body}>
                <Typography variant="caption" color="GrayText">
                  كفش ريباك
                </Typography>
                <Typography variant="body1">كفش كوهنوردی مدل plus</Typography>
              </Box>
              <Box component="div" className={classes.footer}>
                <Typography variant="caption">
                  <span style={{ marginRight: ".5rem" }}>30000</span>
                  <del style={{ color: "red" }}>36000</del>
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
