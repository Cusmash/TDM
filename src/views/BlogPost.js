import React from "react";
import "../css/BlogPost.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
// import Tags from "../components/Tags";
// import Header from "../components/Header";
/*Icons FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import FBSharing from "../components/SharingButton";

import { Helmet } from "react-helmet";
/*Responsiveness */
import Hidden from "@material-ui/core/Hidden";
/*AXIOS*/
import axios from "axios";

import MiniCard from "../components/miniCard/MiniCard";

class BlogPost extends React.Component {
  state = {
    Art1: [],
    Art2: [],
    Art3: [],
    Art4: [],
    Art5: [],
    section: []
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    //OBTENER RUTA DE ARTICULO
    // {this.props.match.params.ruta}
    axios
      .get(
        `http://prosisdev.sytes.net:84/api/articulo/${this.props.match.params.articuloId}`
      )
      .then(res => {
        const datosArticulo = res.data.data[0];
        const datosArticulo2 = res.data.data[1];
        const datosArticulo3 = res.data.data[2];
        const datosArticulo4 = res.data.data[3];
        const datosArticulo5 = res.data.data[4];
        const datosArticulo6 = res.data.data[5];
        this.setState({
          Art1: datosArticulo,
          Art2: datosArticulo2,
          Art3: datosArticulo3,
          Art4: datosArticulo4,
          Art5: datosArticulo5,
          section: datosArticulo6
        });
      });
  }

  componentDidUpdate(prevProps) {
    window.scrollTo(0, 0);
    if (
      prevProps.match.params.articuloId !== this.props.match.params.articuloId
    ) {
      axios
        .get(
          `http://prosisdev.sytes.net:84/api/articulo/${this.props.match.params.articuloId}`
        )
        .then(res => {
          const datosArticulo = res.data.data[0];
          const datosArticulo2 = res.data.data[1];
          const datosArticulo3 = res.data.data[2];
          const datosArticulo4 = res.data.data[3];
          const datosArticulo5 = res.data.data[4];
          const datosArticulo6 = res.data.data[5];
          this.setState({
            Art1: datosArticulo,
            Art2: datosArticulo2,
            Art3: datosArticulo3,
            Art4: datosArticulo4,
            Art5: datosArticulo5,
            section: datosArticulo6
          });
        });
    }
  }

  Facebook = () => {
    window.location.assign("https://www.facebook.com/TwoDifferentMinds");
  };
  Instagram = () => {
    window.location.assign("https://www.instagram.com/twodifferentminds/");
  };
  Twitter = () => {
    window.location.assign("https://twitter.com/TDifferentMinds");
  };
  render() {
    var img = `http://prosisdev.sytes.net:84/api/img/${this.state.Art1.ImgUrl}`;
    var url = `http://www.twodifferentminds.com/articulo/${this.props.match.params.articuloId}`;
    // var ulr2 =`${this.props.match.params.articuloId}`;
    console.log(img);
    console.log(url);
    return (
      <div>
        <Helmet>
          <title>{this.state.Art1.Nombre}</title>
          <link rel="canonical" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.state.Art1.Nombre} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={img} />
        </Helmet>
        <Container maxWidth="lg" className="espacio-header">
          <Grid container spacing={4}>
            <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
              <Card>
                <CardMedia
                  className="img-art"
                  image={img}
                  title={this.props.match.params.articuloId}
                />
              </Card>
              <Typography className="titulo-espacio" align="left" variant="h4">
                {this.state.Art1.Nombre}
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="textSecondary"
                className="color-autor"
              >
                <span className="autor">Autor:</span>{" "}
                {this.state.Art1.UserName + "  "}
                <span className="autor">Fecha de Publicacion:</span>{" "}
                {this.state.Art1.Fecha}
              </Typography>
              <Typography
                align="left"
                variant="subtitle1"
                color="textSecondary"
              ></Typography>
              {/* <FacebookShare 
                  image={img} 
                  titulo={this.props.match.params.articuloId}
                  fecha={this.state.Art1.Fecha} /> */}

              <FBSharing image={img} title={url} />

              <Divider />
              <p
                className="text-align text-interlineado"
                dangerouslySetInnerHTML={{ __html: this.state.Art1.Body }}
              ></p>
              {/* Comentarios de Fb */}
              <div
                class="fb-comments"
                data-href="http://www.twodifferentminds.com"
                data-width=""
                data-numposts="5"
              ></div>

              <Divider />
              <Typography
                align="left"
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                <p className="subTitles">TAMBIÉN TE PODRÍA GUSTAR</p>
              </Typography>
              <Grid container spacing={2}>
                <Grid item xl={6} sm={6} md={6} xs={12}>
                  <MiniCard
                    titulo={this.state.Art2.Nombre}
                    image={this.state.Art2.ImgUrl}
                    ruta={this.state.Art2.Url}
                  />
                </Grid>
                <Grid item xl={6} sm={6} md={6} xs={12}>
                  <MiniCard
                    titulo={this.state.Art3.Nombre}
                    image={this.state.Art3.ImgUrl}
                    ruta={this.state.Art3.Url}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Grid container spacing={1}>
                <Grid item xl={12} lg={12} sm={12} xs={12}>
                  <Divider />
                  <Typography
                    align="left"
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    <p className="subTitles">SÍGUENOS</p>
                  </Typography>
                  <Typography align="left" display="block">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="2x"
                      style={{ color: "#3b5998", margin: 5, cursor: "pointer" }}
                      onClick={this.Facebook}
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      style={{ color: "#00acee", margin: 5, cursor: "pointer" }}
                      onClick={this.Twitter}
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#E1306C", margin: 5, cursor: "pointer" }}
                      onClick={this.Instagram}
                    />
                  </Typography>
                  <Divider />
                  {/* <FacebookShare></FacebookShare> */}
                </Grid>
                <Hidden smDown>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      <p className="subTitles">MÁS ARTÍCULOS</p>
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                        <MiniCard
                          titulo={this.state.Art4.Nombre}
                          image={this.state.Art4.ImgUrl}
                          ruta={this.state.Art4.Url}
                        />
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                        <MiniCard
                          titulo={this.state.Art5.Nombre}
                          image={this.state.Art5.ImgUrl}
                          ruta={this.state.Art5.Url}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default BlogPost;
