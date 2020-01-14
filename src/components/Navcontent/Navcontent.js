import React from "react";
import { Link as Link2 } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './Navcontent.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

export default function Navcontent(props) {

  return (
    <nav className="nav">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler}/>
      </div>
      <div className="nav-links">
          <Button component={Link2} className="navlink" to={`/`}>Inicio
          </Button>
          {props.section.map((section, id) => (
            <Button 
              component={Link2} 
              className="navlink"
              key={id}  
              to={`/seccion/${section.IdSection}`}
            >
              {section.Nombre}
            </Button>
          ))}
      </div>
    </nav>
  );
}
