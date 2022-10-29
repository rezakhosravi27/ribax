import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function index() {
  return (
    <Box
      component="div"
      sx={{
        height: { xs: "60vh", md: "60vh" },
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{ height: "100%", width: "100%" }}
        src="/nike3.webp"
      />
      <Box
        component="div"
        sx={{
          position: "absolute",
          right: "3rem",
          top: "50%",
          transform: "translate(0, -50%)",
        }}
      >
        <Typography
          color="white"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          كالكشن جديد
        </Typography>
        <Typography color="white" sx={{ fontSize: { xs: "3rem", md: "4rem" } }}>
          AR نايك 150
        </Typography>
        <Button size="small" variant="contained">
          خريد كن
        </Button>
      </Box>
    </Box>
  );
}
