import React from 'react';

import Ax from '../../hoc/Ax';
import classes from './Layout.css';

const layout = ( props ) => (
  <Ax>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.content}>
      {props.children}  
    </main>
  </Ax>
);

export default layout;