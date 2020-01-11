import React from "react";
import Button from '@material-ui/core/Button';
// import Header from "../components/Header";
import axios from 'axios';
import "../../css/CategoryPosts.css";

import './AllPosts.css';
import PostCard from "../postCard/postCard";
class AllPosts extends React.Component {
    state = {
        articulosBySection: [],
        nextArt: 6
    }
    nextrows = () => {
        var nextActual = this.state.nextArt;
        axios.get(`http://localhost:8082/api/inicio/all/${this.state.nextArt}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo,
                    nextArt: nextActual + 6
                });
            })
    }
    render() {
        return (
            <div className="directory-inicio">
                {this.state.articulosBySection.map((articulo, key) => (
                    <PostCard 
                        key={key} titulo={articulo.Nombre} 
                        fecha={articulo.Fecha} 
                        image={articulo.ImgUrl}>
                    </PostCard>
                ))}
                 <Button 
                    onClick={this.nextrows} variant="contained" 
                    className="colorButton"
                    style={{marginLeft: "auto",marginRight: "auto"}}
                >
                    Más Artículos
                </Button>
            </div>

        )
    }
}
export default AllPosts;