import { Divider } from "@mui/material";
import React from "react";
import SearchSection from "./SearchSection";
import MenuSection from "./MenuSection";
import Hidden from "@mui/material/Hidden";

export default function index() {
  return (
    <>
      <SearchSection />
      <Divider />
      <Hidden mdDown>
        <MenuSection />
        <Divider />
      </Hidden>
    </>
  );
}
