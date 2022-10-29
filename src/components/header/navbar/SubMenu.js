import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const initialStyle = {
  width: "inherit",
  backgroundColor: "red",
  boxSizing: "border-box",
  height: "max-content",
  position: "absolute",
  top: "100%",
  transition: "all 1s",
};

export default function SubMenu({ style = initialStyle, children, className }) {
  return (
    <Box component="div" style={style} className={className}>
      <Container maxWidth={false}>
        <Grid container py={2}>
          {children}
        </Grid>
      </Container>
    </Box>
  );
}
