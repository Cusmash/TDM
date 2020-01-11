import React from 'react';
import { Link as Link2 } from 'react-router-dom';

import './SideDrawer.css';
import { MenuList, MenuItem } from '@material-ui/core';

const SideDrawer = props => (
    <nav className='side-drawer'>
        <h1>Menu</h1>
        <MenuList className='menulist'> 
        <MenuItem 
            component={Link2} 
            className="sideLink" 
            to={`/`}>Inicio
        </MenuItem>
        {props.section.map((section, id) => (
        <MenuItem 
          component={Link2} 
          className="sideLink"
          key={id}  
          to={`/seccion/${section.IdSection}`}
        >
            {section.Nombre}
        </MenuItem>

        ))}
        </MenuList>
    </nav>
);

export default SideDrawer;