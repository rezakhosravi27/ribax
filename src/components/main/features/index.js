import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import { Divider } from "@mui/material";

export default function FolderList() {
  return (
    <>
      <Container maxWidth={false}>
        <Grid
          container
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            display: "flex",
            direction: "ltr",
            justifyContent: "space-between",
            my: 3,
          }}
        >
          <Grid item xs={6} md={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                  <PhoneAndroidOutlinedIcon fontSize="large" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="دانلود اپلیکیشن"
                secondary="مناسب تمام پلتفرم ها"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6} md={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                  <ReplayOutlinedIcon fontSize="large" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="عودت محصول"
                secondary="بازگشت محصول تا 10 روز"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6} md={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                  <LocalShippingOutlinedIcon fontSize="large" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="ارسال رایگان"
                secondary="برای سفارشات بالای 500 هزار"
              />
            </ListItem>
          </Grid>
          <Grid item xs={6} md={3}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ width: 56, height: 56, mr: 2 }}>
                  <HttpsOutlinedIcon fontSize="large" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="پرداخت امن"
                secondary="در تمام مراحل خرید"
              />
            </ListItem>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </>
  );
}
