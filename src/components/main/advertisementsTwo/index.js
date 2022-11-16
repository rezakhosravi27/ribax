import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0px 0px 5px #333",
      transition: ".5s",
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
        my={5}
        sx={{ height: { xs: "80vh", md: "80vh" } }}
      >
        <Grid item xs={12} md={4} sx={{ height: "100%", position: "relative" }}>
          <Box
            component="img"
            src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/06/banner-06-home01.jpg"
            sx={{ height: "100%", width: "100%" }}
            className={classes.root}
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, 0)",
              p: { xs: 3, md: 2, lg: 4 },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              color="black"
              sx={{ fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              لباس تمرين زنانه
            </Typography>
            <Typography
              color="black"
              variant="caption"
              textAlign="center"
              fontSize=".7rem"
            >
              فقط 100 هزار تومن
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "100%", position: "relative" }}>
          <Box
            component="img"
            src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/06/banner-05-home01.jpg"
            sx={{ height: "100%", width: "100%" }}
            className={classes.root}
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, 0)",
              p: { xs: 3, md: 2, lg: 4 },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              color="black"
              sx={{ fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              لباس تمرين زنانه
            </Typography>
            <Typography
              color="black"
              variant="caption"
              textAlign="center"
              fontSize=".7rem"
            >
              فقط 100 هزار تومن
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "100%", position: "relative" }}>
          <Box
            component="img"
            src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/06/banner-04-home01.jpg"
            sx={{ height: "100%", width: "100%" }}
            className={classes.root}
          />
          <Box
            component="div"
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, 0)",
              p: { xs: 3, md: 2, lg: 4 },
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              color="black"
              sx={{ fontSize: { xs: ".9rem", md: "1rem" } }}
            >
              لباس تمرين زنانه
            </Typography>
            <Typography
              color="black"
              variant="caption"
              textAlign="center"
              fontSize=".7rem"
            >
              فقط 100 هزار تومن
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
