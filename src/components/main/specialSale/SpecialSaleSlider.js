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

export default function SpecialSaleSlider() {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{ height: { xs: "50vh", md: "60vh" }, my: 3, cursor: "grab" }}
    >
      <Swiper
        style={{ width: "100%", height: "100%" }}
        breakpoints={{
          300: {
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
        modules={[FreeMode]}
        className="mySwiper"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((slide, index) => {
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
                <Box component="img" src={`/dress${index + 1}.png`} />
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
