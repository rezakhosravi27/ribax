import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  rootItems: {
    "&:hover > img": {
      transform: "scale(1.01)",
      transition: ".5s",
      boxShadow: "0px 0px 5px #333",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <Grid container spacing={3} my={5}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ height: "99vh", position: "relative", overflow: "hidden" }}
          className={classes.rootItems}
        >
          <Box
            component="img"
            sx={{ height: "100%", width: "100%" }}
            src="/sport3.jpg"
          />
          <Box
            component="div"
            sx={{
              width: '100%', 
              position: "absolute",
              top: "50%",
              left: "50%",
              display: "flex",
              justifyContent: " center",
              flexDirection: "column",
              alignItems: "center",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography color="white" variant="h6" sx={{ fontSize: {xs: '5vw', md: "2vw"} }}>
              لباس زنانه
            </Typography>
            <Typography color="white" variant="h3" sx={{fontSize: {xs: '2rem', md: '3rem'}}}>
              تا 30% تخفيف
            </Typography>
            <Button variant="contained">خريد كن</Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: "100vh" }}>
          <Grid container spacing={1} sx={{ height: "100%" }}>
            <Grid
              item
              xs={12}
              sx={{ height: "50%", position: "relative" }}
              className={classes.rootItems}
            >
              <Box
                component="img"
                sx={{ height: "100%", width: "100%" }}
                src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/05/banner-01-home01.jpg"
              />
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "3rem",
                  display: "flex",
                  justifyContent: " center",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: "translate(0, -50%)",
                }}
              >
                <Typography color="black" sx={{ fontSize: {xs: '2rem', md: "2.5rem"} }}>
                  كفش
                </Typography>
                <Typography color="black" sx={{ fontSize: {xs: '2rem', md: "2.5rem"} }}>
                  دويدن
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ mt: 2, fontSize: ".8rem" }}
                >
                  خريد آنلاين
                </Button>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ height: "50%", position: "relative" }}
              className={classes.rootItems}
            >
              <Box
                component="img"
                sx={{ height: "100%", width: "100%" }}
                src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/05/banner-02-home01.jpg"
              />
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "3rem",
                  display: "flex",
                  justifyContent: " center",
                  flexDirection: "column",
                  alignItems: "center",
                  transform: "translate(0, -50%)",
                }}
              >
                <Typography color="white" sx={{ fontSize: {xs: '2rem', md: "2.5rem"} }}>
                  تيشرت
                </Typography>
                <Typography color="white" sx={{ fontSize: {xs: '2rem', md: "2.5rem"} }}>
                  مردانه
                </Typography>
                <Button
                  size="small"
                  color="error"
                  variant="contained"
                  sx={{ mt: 2, fontSize: ".8rem" }}
                >
                  خريد آنلاين
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
