import React from 'react';
import { Link } from 'react-router-dom';

import './postCard.css'
function PostCard ({ titulo, fecha, image, ruta}) {

    console.log()
    return(
        <div className="containerpost">
            <div style={{
                backgroundImage: `url(http://prosisdev.sytes.net:84/api/img/${image})`
            }}
            className="card"
            >
                <Link 
                    to={`/articulo/${image}`} 
                    style={{ textDecoration: 'none' }}
                    className="titulo2"
                >
                <h4 className="title">{titulo}</h4>
                </Link>
                
            </div>
        </div>
    )
}


export default PostCard;