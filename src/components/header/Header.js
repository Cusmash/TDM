import React from "react";
//Imports Header
import Logo from "../logo/Logo";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import bg from "../../Assets/bg.png";
import './Header.css';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginLeft: "4vw",
    marginRight: "3vw"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.1)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  textColor: {
    color: "white",
    // color: "#1b65a7",  textShadow: "1px 2px 8px gray",
    textShadow: "1px 1px 1px gray",
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className="container" >
      <div className="imgheader" style={{backgroundImage: `url(${bg})`}}>
        <div  />
              <div className={classes.mainFeaturedPostContent}>
                <Logo></Logo>
                <Typography variant="h5" className={classes.textColor} paragraph align="center">
                  Artículos, opiniones, reseñas y más...
                </Typography>
              </div>
      </div>
    </div>
  );
}
