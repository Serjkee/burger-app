import React, { Component } from 'react';
import { connect } from 'react-redux';

import Ax from '../Ax/Ax';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleClicked = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }

  render() {
    return (
    <Ax>
      <Toolbar 
        isAuth={this.props.isAuthenticated}
        drawerToggleClicked={this.sideDrawerToggleClicked}/>
      <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerClosedHandler} />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={classes.content}>
        {this.props.children}  
      </main>
    </Ax>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

export default connect(mapStateToProps)(Layout);