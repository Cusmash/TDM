import React from "react";
import Button from '@material-ui/core/Button';
import Cards from "../components/Cards";
import axios from 'axios';
import "../css/CategoryPosts.css";
import Grid from "@material-ui/core/Grid";

import { Container } from "@material-ui/core";

class CategoryPosts extends React.Component {
    state = {
        articulosBySection: [],
        nextArt: 6,
        art1: [],
        art2: [],
        art3: [],
        art4: [],
        art5: [],
        art6: [],
        art7: [],
        art8: [],
        art9: [],
        section:[]    
    }
    componentDidMount() {
        axios.get(`http://localhost:8082/api/seccion/${this.props.match.params.section}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo
                });
            })
        //console.log(this.state.nextArt)

    }
    nextrows = () => {
        var nextActual = this.state.nextArt;
        axios.get(`http://localhost:8082/api/seccion/${this.props.match.params.section}/${this.state.nextArt}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo,
                    nextArt: nextActual + 6
                });
                //console.log(this.state.nextArt)
            })
    }

    traerSecciones(){
        axios.get(`http://localhost:8082/api/inicio`)
        .then(res => {
        if(res){
          let datosArticuloInicio = res.data.data;
          this.setState({
            art1: datosArticuloInicio[0],
            art2: datosArticuloInicio[1],
            art3: datosArticuloInicio[2],
            art4: datosArticuloInicio[3],
            art5: datosArticuloInicio[4],
            art6: datosArticuloInicio[5],
            art7: datosArticuloInicio[6],
            art8: datosArticuloInicio[7],
            art9: datosArticuloInicio[8],
            section:datosArticuloInicio[9]
          }); 
        } 
      })
      .catch(error => {
        console.log(error);
      });
    }


    render() {
        return (
            <div>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {this.state.articulosBySection.map((articulo, key) => (
                            <Grid key={key} item md={4} xs={12} lg={4} sm={6}>
                                <Cards key={key} titulo={articulo.Nombre} fecha={articulo.Fecha} ruta={articulo.ImgUrl}></Cards>
                            </Grid>
                        ))}
                        
                    </Grid>
                    <Button onClick={this.nextrows} variant="contained" className="colorButton">Más Artículos</Button>
                </Container>


            </div>

        )
    }
}
export default CategoryPosts;