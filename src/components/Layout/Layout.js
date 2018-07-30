import React from 'react';

import Ax from '../../hoc/Ax';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
  <Ax>
    <Toolbar />
    <SideDrawer />
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}  
    </main>
  </Ax>
);

export default layout;