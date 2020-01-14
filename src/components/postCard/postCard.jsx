import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './postCard.css'
function PostCard ({ titulo, fecha, image, ruta}) {

    console.log()
    return(
        <Fragment>
            <div style={{
                backgroundImage: `url(http://localhost:8082/api/img/${image})`
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
        </Fragment>
    )
}


export default PostCard;