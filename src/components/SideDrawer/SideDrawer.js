import React from 'react';
import { Link as Link2 } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import './SideDrawer.css';

const SideDrawer = props => (
    <nav className="side-drawer">
      <div 
        className="sideD-links">
        <Button component={Link2} className="sdlink" to={`/`}>Inicio
        </Button>
        {props.section.map((section, id) => (
            <Button 
                component={Link2} 
                className="sdlink"
                key={id}  
                to={`/seccion/${section.IdSection}`}
            >
                {section.Nombre}
            </Button>

          ))}
      </div>
    </nav>
)
export default SideDrawer;