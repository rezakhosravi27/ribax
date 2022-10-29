import * as React from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Basket() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Badge color="success" badgeContent={1}>
          <ShoppingBasketIcon color="action" />
        </Badge>
      </Grid>
      <Grid item>
        <Badge color="success" badgeContent={1}>
          <FavoriteBorderIcon color="action" />
        </Badge>
      </Grid>
      <Grid item>
        <PersonIcon color="action" />
      </Grid>
    </Grid>
  );
}
