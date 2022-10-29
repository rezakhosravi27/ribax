import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RightDrawer from "./RightDrawer";
import { makeStyles } from "@mui/styles";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import SubMenu from "./SubMenu";
import Box from "@mui/material/Box";
import "./menu.style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  items: {
    height: "inherit",
    display: "flex",
    alignItems: "center",
  },
  drawerContainer: {
    justifyContent: "flex-end",
  },
  menuListContainer: {
    justifyContent: "center",
  },
}));

export default function MenuSection() {
  const classes = useStyles();
  return (
    <Grid
      container
      sx={{ minHeight: "5rem" }}
      alignItems="center"
      className={classes.root}
    >
      <Container maxWidth={false}>
        <Grid container>
          <Grid item xs={12} md={3} className={classes.items}>
            <Link to="#">
              <Typography color="error">فروش ویژه</Typography>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${classes.items} ${classes.menuListContainer}`}
          >
            <MenuList />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            className={`${classes.items} ${classes.drawerContainer}`}
          >
            <RightDrawer />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
