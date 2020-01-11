import React from "react";
import "./Logo.css";
class Logo extends React.Component{
    render(){
        return(
            <div className="logo">
            <div id="blueslice"></div>
            <h1 className="td">TW<span className="blue">O </span></h1>
            <h1 className="td"> D<span className="red">I<span className="td">FF<span className="red">E<span className="td">R<span className="red">E<span className="td">NT  </span></span></span></span></span></span></h1>
            <h1 className="minds">MINDS</h1>
             <div id="redslice"></div>
        </div>
        )
    }
}
export default Logo;