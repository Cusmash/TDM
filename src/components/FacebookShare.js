import React from 'react';
// import "../css/FacebookShare.css"
import { 
  FacebookShareButton, 
  FacebookIcon
} from 'react-share';

function FacebookShare ({ titulo, fecha, image, ruta}) {

    return (
      <FacebookShareButton link={titulo} url='www.twodifferentminds.com/articulo/${titulo}' quote={image}>
        
        <FacebookIcon  size={32}/>
        {/* hashtag='#Samvikshana' */}
      </FacebookShareButton>
    );
}

export default FacebookShare;