import React, { Fragment } from "react";
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
        axios.get(`http://prosisdev.sytes.net:84/api/inicio/all/${this.state.nextArt}`)
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
            <Fragment>

            <div className="directory-inicio">
                {this.state.articulosBySection.map((articulo, key) => (
                    <PostCard 
                        key={key} titulo={articulo.Nombre} 
                        fecha={articulo.Fecha} 
                        image={articulo.ImgUrl}>
                    </PostCard>
                ))}
            </div>
                 <Button 
                    onClick={this.nextrows} variant="contained" 
                    className="colorButton"
                    style={{marginLeft: "auto",marginRight: "auto"}}
                >
                    Más Artículos
                </Button>
            </Fragment>
        )
    }
}
export default AllPosts;