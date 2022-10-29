import React from "react";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./menu.style.css";
import Grid from "@mui/material/Grid";
import SubMenu from "./SubMenu";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    height: "inherit",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },
  lists: {
    padding: 0,
    margin: 0,
    listStyleType: "none",
    fontFamily: "vazir",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1.1vw",
  },
}));

const lists = [
  "صفحه اصلی",
  "فروشگاه",
  " محصول",
  "وبلاگ",
  "صفحات",
  "تماس با ما",
];

const revereseLists = lists.reverse();

export default function MenuList() {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.root}>
        {revereseLists.map((list, index) => {
          return (
            <li
              key={index}
              className={`${classes.lists} menu-list-${
                index === 0
                  ? "contact"
                  : index === 1
                  ? "pages"
                  : index === 2
                  ? "blog"
                  : index === 3
                  ? "product"
                  : index === 4
                  ? "shoping"
                  : index === 5
                  ? "home"
                  : null
              }`}
            >
              {index === 0 ? null : <KeyboardArrowDownIcon />}
              {list}
            </li>
          );
        })}
      </ul>
    </>
  );
}
