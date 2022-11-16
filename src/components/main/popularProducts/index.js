import React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import PopularProductsSlider from "./PopularProductsSlider";

export default function index() {
  return (
    <Container maxWidth={false}>
      <Box my={10} sx={{ mt: { xs: 100, md: 0 } }}>
        <Title />
        <PopularProductsSlider />
      </Box>
    </Container>
  );
}
