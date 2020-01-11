import React from 'react';
import './SearchCards.css';

import PostCard from '../postCard/postCard';

export default function SearchCards (props) {
        console.log(props)
        return( 
        <div>
            {props.articulosTodos.map(artTodos =>(
                <div 
                    key={artTodos.Nombre}
                    className="directory-inicio"
                >
                    <PostCard 
                        titulo={artTodos.Nombre}
                        image={artTodos.ImgUrl}
                        fecha={artTodos.fecha}
                    />
                </div>
            ))}
        </div>)
}


