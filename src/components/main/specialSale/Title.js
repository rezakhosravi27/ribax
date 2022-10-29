import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";

export default function Title() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      ></Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          textAlign="left"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
          }}
        >
          فروش ویژه روزانه
          <PercentIcon color="error" sx={{ mr: 2, fontSize: "2.5rem" }} />
        </Typography>
      </Grid>
    </Grid>
  );
}
