import React, { Fragment } from 'react'
import { Facebook, Twitter } from 'react-social-sharing'

function FBSharing ({ image, title }) {

    return (
        <Fragment>
            <Facebook  solidcircle big 
            link={title}
            label='Bienvenido a TDM'
            img={image}/>
            <Twitter solidcircle big link={title} img={image}/>
        </Fragment>
    );
}

export default FBSharing;