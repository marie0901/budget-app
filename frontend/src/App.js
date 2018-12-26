import React, { Component } from 'react';


import './App.css';
import {
  Route,
  HashRouter,
} from "react-router-dom";

import Budget from './components/Budget';
import AccountsContainer from './components/AccountsContainer';
import AccountDetail from './components/AccountDetail';
import NavbarLeft from './components/NavbarLeft';
import BudgetHeader from './components/BudgetHeader';
import AccountHeader from './components/AccountHeader';
import AllAccountsHeader from './components/AllAccountsHeader';
import 'typeface-roboto';

import styles from './styles';


import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import NotificationsIcon from '@material-ui/icons/Notifications';





class App extends Component {

  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;


    return (
        <HashRouter>

        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h2"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                <Route exact path = "/" component = {BudgetHeader} />
                <Route path = "/accounts" component = {AllAccountsHeader} />
                <Route path = "/account/:id" component = {AccountHeader} />
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>

            <Divider />
              <NavbarLeft />
            <Divider />

          </Drawer>

          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <h1>Content DIV</h1>
              <Route exact path = "/" component = {Budget} />
              <Route path = "/accounts" component = {AccountsContainer} />
              <Route path = "/account/:id" component = {AccountDetail} />
          </main>
        </div>

        </HashRouter>
    );
  }
}

export default withStyles(styles)(App);
