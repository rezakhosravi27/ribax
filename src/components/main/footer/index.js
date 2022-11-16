import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function index() {
  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        width: "100%",
        backgroundColor: "#333",
      }}
    >
      
      <Container maxWidth="lg">
        <Grid container sx={{ py: { xs: 5, md: 10 } }}>
          {[0, 1, 2, 3].map((item, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <Grid container flexDirection="column">
                  <Typography variant="h6" color="white" textAlign="left">
                    مردانه
                  </Typography>
                  {[0, 1, 2, 3, 4, 5, 6].map((item, index) => {
                    return (
                      <Typography
                        key={index}
                        variant="caption"
                        color="white"
                        textAlign="left"
                        sx={{ mt: 1 }}
                      >
                        لباس ورزشی
                      </Typography>
                    );
                  })}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Divider sx={{ backgroundColor: "white" }} />
        <Grid container sx={{ py: { xs: 2 } }} justifyContent="flex-end">
          <Typography textAlign="left" variant="caption" color="white">
            <Typography component="span" color="error" variant="caption">
              REEBOX ©{" "}
            </Typography>
            – تمامی حقوق برای این وبسایت محفوظ میباشد بومی سازی توسط{" "}
            <Typography component="span" color="yellow" variant="caption">
              بروز وردپرس.
            </Typography>
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
}
