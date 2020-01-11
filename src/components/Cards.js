import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
//Import de imagen de ejemplo


const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    height: 180,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  cardContent: {
    flexGrow: 1,
    backgroundColor: "blue"
  }
}));


export default function Cards(props) {
  const classes = useStyles();
  if(props.ruta){
    var img = `http://prosisdev.sytes.net:84/api/img/${props.ruta}`
  }else{
     img = "undefined";
  }
  
  return (
    <Card className={classes.card} >
      <CardMedia className={classes.cardMedia} image={img}  >
        <h3 title={props.ruta}></h3>
        </CardMedia>
        <Typography gutterBottom variant="h6" component="h6">
        <Link 
          to={`/articulo/${props.ruta}`} 
          style={{ textDecoration: 'none' }}
        >
          {props.titulo}
        </Link>
        </Typography>

      <CardActions>
      </CardActions>
    </Card>
  );
}
