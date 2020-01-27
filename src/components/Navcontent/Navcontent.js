import React from "react";
import { Link as Link2 } from 'react-router-dom';

import './Navcontent.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../Assets/logo.png';

export default function Navcontent(props) {

  return (
    <nav className="nav">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <img className="icon" alt="Blog de Noticias" src={logo}/>
      <div className="nav-links">
          <Link2  className="navlink" to={`/`}>Inicio</Link2>
          {props.section.map((section, id) => (
            <Link2 className="navlink" key={id} to={`/seccion/${section.IdSection}`}>
              {section.Nombre}
            </Link2>
          ))}
      </div>
    </nav>
  );
}
