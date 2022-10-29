import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function SearchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#eee",
      }}
    >
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        color="info"
        aria-label="search"
      >
        <SearchIcon color="success" />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, px: 1, direction: "ltr" }}
        placeholder="جستجو برای محصولات"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
