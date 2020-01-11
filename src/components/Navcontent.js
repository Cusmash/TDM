import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import { Link as Link2 } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import '../css/Navcontent.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    width: "100% !important"
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    color: "black",

  },
  bg: {
    backgroundColor: "#4fa0cb",
    flexGrow: 1,
  },

  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: "white",
    textDecoration: "none",
    fontFamily: "Roboto",
    '&:hover': {
      backgroundColor: 'rgb(122, 0, 118 )',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

}));

export default function Navcontent(props) {
  const classes = useStyles();
 
   
  return (
    <div className={classes.bg}>
      <AppBar className={classes.bg} position="static">
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
      <div>
        <DrawerToggleButton/>
      </div>
          <Button component={Link2} className="navlink" to={`/`}>Inicio
          </Button>
          {props.section.map((section, id) => (
            <Button 
              component={Link2} 
              className="navlink"
              key={id}  
              to={`/seccion/${section.IdSection}`}
            >
              {section.Nombre}
            </Button>

          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
