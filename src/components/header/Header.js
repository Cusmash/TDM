import React from "react";
//Imports Header
import Logo from "../logo/Logo";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import bg from "../../Assets/bg.png";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
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
    color: "",
    // color: "#1b65a7",
    textShadow: "1px 2px 8px gray",
    textAlign: "center"
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={12} xs={12} lg={12} sm={12}>
            <div className={classes.mainFeaturedPostContent}>
              {/* <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                className={classes.textColor}
                align="center"
              >
                TwoDifferentMinds
              </Typography> */}
              <Logo></Logo>
              <Typography variant="h5" className={classes.textColor} paragraph align="center">
                Artículos, opiniones, reseñas y más...
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
