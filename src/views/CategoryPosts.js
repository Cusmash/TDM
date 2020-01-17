import React from "react";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import "../css/CategoryPosts.css";

import PostCard from "../components/postCard/postCard";

class CategoryPosts extends React.Component {
    state = {
        articulosBySection: [],
        nextArt: 6
    }
    componentDidMount() {
        axios.get(`http://prosisdev.sytes.net:84/api/seccion/${this.props.match.params.section}`)
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
        axios.get(`http://prosisdev.sytes.net:84/api/seccion/${this.props.match.params.section}/${this.state.nextArt}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo,
                    nextArt: nextActual + 6
                });
                //console.log(this.state.nextArt)
            })
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.section !== prevProps.match.params.section){
            axios.get(`http://prosisdev.sytes.net:84/api/seccion/${this.props.match.params.section}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo
                });
            })
        }
        // console.log(prevProps)
        // console.log(this.props)
    }

    render() {
        return (
            <div className="container">
            <br/>
                <div className="directory-inicio">
                {this.state.articulosBySection.map(articulo => (
                        <PostCard key={articulo.Nombre} 
                            titulo={articulo.Nombre} 
                            image={articulo.ImgUrl} 
                            fecha={articulo.Fecha}
                        > 
                        </PostCard>
                ))}
                </div>
                        
                <Button 
                    onClick={this.nextrows} variant="contained" className="colorButton"
                >
                    Más Artículos
                </Button>

            </div>

        )
    }
}

export default CategoryPosts;

