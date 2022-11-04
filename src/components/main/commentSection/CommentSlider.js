import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const styles = {
  paperStyles: {
    height: "100%",
    padding: "1rem",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 5px #333",
    flexDirection: "column",
  },
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
};

export default function CommentSlider() {
  return (
    <Grid item sx={{ height: "40vh" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1.5,
          },
          700: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 3.5,
          },
        }}
        modules={[]}
        style={styles.swiper}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <SwiperSlide style={styles.swiperSlide}>
              <Paper style={styles.paperStyles}>
                <Typography
                  variant="caption"
                  sx={{ direction: "ltr", textAlign: "justify" }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای...
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="left"
                  color="gray"
                  sx={{ width: "100%", mt: 3 }}
                >
                  توسط : رضا
                </Typography>
              </Paper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Grid>
  );
}
