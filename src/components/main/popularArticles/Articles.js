import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
      transition: ".5s",
    },
  },
}));

export default function Articles() {
  const classes = useStyles();
  return (
    <Grid container spacing={5} my={5}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "auto" }}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: {
                xs: "max-content",
                md: "30vh",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography textAlign="left">
              رنگ‌های جدید خاکی برای نایک استریتگاتو منتشر شد
            </Typography>
            <Grid
              container
              mt={3}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "4vh" }}
            >
              <Typography variant="caption"> 8 خرداد 1400</Typography>
              <Divider orientation="vertical" sx={{ margin: "0 1rem" }} />
              <Typography variant="caption"> توسط ADMIN</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: { xs: "50vh", md: "30vh" }, order: { xs: 1, md: 2 } }}
          >
            <Box
              component="img"
              src="https://demo.brozwp.ir/reebox/wp-content/uploads/2021/05/3.jpg"
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "auto" }}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: {
                xs: "max-content",
                md: "30vh",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography textAlign="left">
              رنگ‌های جدید خاکی برای نایک استریتگاتو منتشر شد
            </Typography>
            <Grid
              container
              mt={3}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "4vh" }}
            >
              <Typography variant="caption"> 8 خرداد 1400</Typography>
              <Divider orientation="vertical" sx={{ margin: "0 1rem" }} />
              <Typography variant="caption"> توسط ADMIN</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: { xs: "50vh", md: "30vh" }, order: { xs: 1, md: 2 } }}
          >
            <Box
              component="img"
              src="https://demo.brozwp.ir/reebox/wp-content/uploads/2021/05/3.jpg"
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "auto" }}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: {
                xs: "max-content",
                md: "30vh",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography textAlign="left">
              رنگ‌های جدید خاکی برای نایک استریتگاتو منتشر شد
            </Typography>
            <Grid
              container
              mt={3}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "4vh" }}
            >
              <Typography variant="caption"> 8 خرداد 1400</Typography>
              <Divider orientation="vertical" sx={{ margin: "0 1rem" }} />
              <Typography variant="caption"> توسط ADMIN</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: { xs: "50vh", md: "30vh" }, order: { xs: 1, md: 2 } }}
          >
            <Box
              component="img"
              src="https://demo.brozwp.ir/reebox/wp-content/uploads/2021/05/4.jpg"
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ height: "auto" }}
        className={classes.root}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: {
                xs: "max-content",
                md: "30vh",
              },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography textAlign="left">
              رنگ‌های جدید خاکی برای نایک استریتگاتو منتشر شد
            </Typography>
            <Grid
              container
              mt={3}
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "4vh" }}
            >
              <Typography variant="caption"> 8 خرداد 1400</Typography>
              <Divider orientation="vertical" sx={{ margin: "0 1rem" }} />
              <Typography variant="caption"> توسط ADMIN</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ height: { xs: "50vh", md: "30vh" }, order: { xs: 1, md: 2 } }}
          >
            <Box
              component="img"
              src="https://demo.brozwp.ir/reebox/wp-content/uploads/2021/05/1.jpg"
              sx={{ height: "100%", width: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
