import React from "react";
import Title from "./Title";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import SpecialSaleSlider from "./SpecialSaleSlider";

export default function index() {
  return (
    <Container maxWidth={false}>
      <Box my={10}>
        <Title />
        <SpecialSaleSlider />
      </Box>
    </Container>
  );
}
