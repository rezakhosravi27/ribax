import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import SearchInput from "./SearchInput";
import Basket from "./Basket";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "7rem",
  },
  items: {
    height: "inherit",
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50%",
    height: "50px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export default function SearchSection() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={3} className={classes.items}>
            <Basket />
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} md={5} className={classes.items}>
              <SearchInput />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={6}
            md={4}
            className={`${classes.items} ${classes.imgContainer}`}
          >
            <Box
              className={classes.logo}
              component="img"
              src="https://demo.brozwp.ir/reebox/wp-content/uploads/2022/09/logo-new-1.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
