import React, { Component } from 'react';
// import "../css/FacebookShare.css"
import { 
  FacebookShareButton, 
  FacebookIcon
} from 'react-share';
export default class FacebookShare extends Component {
  render() {
    return (
      <FacebookShareButton url='http://www.twodifferentminds.com/articulo/La-ciencia-detras-de-la-teoria-de-sistemas' quote='La-ciencia-detras-de-la-teoria-de-sistemas' hashtag='#Samvikshana'>
        <FacebookIcon  size={32}/>
      </FacebookShareButton>
    );
  }
}