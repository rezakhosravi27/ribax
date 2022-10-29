import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Title from "./Title";
import Articles from "./Articles";

export default function index() {
  return (
    <Container maxWidth={false}>
      <Grid container my={7}>
        <Title />
        <Articles />
      </Grid>
    </Container>
  );
}
