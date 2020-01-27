import React from "react";
import "../css/Inicio.css";
// import { Link } from 'react-router-dom';
// Grid para maquetacion de cards
import Button from "@material-ui/core/Button";
// import { Divider } from "@material-ui/core";
import AllPosts from '../components/allPosts/AllPosts';
import PostCard from '../components/postCard/postCard';
//Axios
import axios from 'axios';

class Inicio extends React.Component {
  state = {
    art1: [],
    art2: [],
    art3: [],
    art4: [],
    art5: [],
    art6: [],
    art7: [],
    art8: [],
    art9: [],
    section:[],
    searchField: '',
    articulosTodos: []
  };

  componentDidMount() {
    //OBTENER ARTICULOS DE INICIO http://prosisdev.sytes.net:84/api/inicio http://localhost:8082/api/inicio
    axios.get(`http://prosisdev.sytes.net:84/api/inicio`)
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
      <div className="container">
      <br/>
      <br/>
      <br/>
        <div className="directory-inicio">
          <PostCard
            titulo={this.state.art1.Nombre} 
            fecha={this.state.art1.Fecha}  
            image={this.state.art1.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art2.Nombre} 
            fecha={this.state.art2.Fecha}  
            image={this.state.art2.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art3.Nombre} 
            fecha={this.state.art3.Fecha}  
            image={this.state.art3.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art4.Nombre} 
            fecha={this.state.art4.Fecha}  
            image={this.state.art4.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art5.Nombre} 
            fecha={this.state.art5.Fecha}  
            image={this.state.art5.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art6.Nombre} 
            fecha={this.state.art6.Fecha}  
            image={this.state.art6.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art7.Nombre} 
            fecha={this.state.art7.Fecha}  
            image={this.state.art7.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art8.Nombre} 
            fecha={this.state.art8.Fecha}  
            image={this.state.art8.ImgUrl}
          >
          </PostCard>
          <PostCard
            titulo={this.state.art9.Nombre} 
            fecha={this.state.art9.Fecha}  
            image={this.state.art9.ImgUrl}
          >
          </PostCard>
        </div>
        <br/>
          <AllPosts className="divbtn">
            <Button 
              className="colorButton" variant="contained" size="small" >
              Más Artículos
            </Button>
          </AllPosts>
    </div>
    );
  }
}
export default Inicio;
