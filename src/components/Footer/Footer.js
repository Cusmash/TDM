import React from "react";
import Grid from '@material-ui/core/Grid';
import "./Footer.css";
import { Container } from "@material-ui/core";
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../../Assets/logo.png";
class Footer extends React.Component {

    Facebook = () => {
        window.location.assign('https://www.facebook.com/TwoDifferentMinds');
      }
      Instagram = () => {
        window.location.assign('https://www.instagram.com/twodifferentminds/');
      }
      Twitter = () => {
        window.location.assign('https://twitter.com/TDifferentMinds');
    
      }
      
    render() {
        return (
            <div className="footer-bg">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Container className="footer-container">
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={12} md={3} lg={3} xl={3} item>
                                    <img className="footer-logo" src={Logo} alt="img" />
                                </Grid>
                                <Grid className="footer-g" xs={6} sm={4} md={3} lg={3} xl={3} item>
                                    {/* <Typography className="footer-link" align="left" variant="overline" display="block" gutterBottom>Nosotros</Typography> */}
                                    <Typography className="footer-link" align="left" variant="overline" display="block" gutterBottom>Contáctanos en nuestras redes sociales</Typography>
                                </Grid>
                                <Grid className="footer-g" xs={6} sm={4} md={3} lg={3} xl={3} item>
                                    <Typography className="footer-link" align="left" variant="overline" display="block" gutterBottom>De parte de: </Typography>
                                    <Typography className="footer-link" align="left" variant="overline" display="block" gutterBottom>Qwerteam y Two Different Minds gracias por visitarnos</Typography>
                                </Grid>
                                <Grid className="footer-g" xs={12} sm={4} md={3} lg={3} xl={3} item>
                                    <Typography className="footer-link" align="left" variant="overline" display="block" gutterBottom>Síguenos</Typography>
                                    <Typography align="left" display="block">
                                        <FontAwesomeIcon icon={faFacebookF} size="1x" style={{ color: "white", margin: 10 }} onClick={this.Facebook} className="cursor" />
                                        <FontAwesomeIcon icon={faTwitter} size="1x" style={{ color: "white", margin: 10 }} onClick={this.Twitter} className="cursor" />
                                        <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: "white", margin: 10 }} onClick={this.Instagram} className="cursor" />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                        <Grid className="footer-copy" xs={12} sm={12} md={12} lg={12} xl={12} item>Copyright © 2019 TwoDifferentMinds</Grid>
                    </Grid>
                </Grid>
            </div>


        )
    }
}
export default Footer;