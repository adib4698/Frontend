import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Home } from "./components/Home/Home.jsx";
import { About } from "./components/About/About.jsx";
import { Login } from "./components/Login/Login.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { Register } from "./components/Register/Register.jsx";
import { TutorialPage } from "./components/TutorialPage/TutorialPage.jsx"
import { Tutorial } from "./components/Tutorial/Tutorial";
import {AddTutorial} from "./components/Tutorial/AddTutorial/AddTutorial";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { BrowserRouter, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
import {history} from "./helpers/index"
import { withStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import {connect} from "react-redux";
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);



export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      <div className="menu">
        <Fade>
          <BrowserRouter>
            <NavLink
                to="/"
                exact
                strict
                onClick={() => history.push("/")}
                className="menuButtons"
            >
          <img className="logo" src={require("./Logo.png")} />
            </NavLink>
          <ul className="menubar">
              <li className="li1">
                <NavLink
                  to="/"
                  exact
                  strict
                  onClick={() => history.push("/")}
                  activeStyle={{ color: "#f0c151" }}
                  className="menuButtons"
                >
                  Home
                </NavLink>
              </li>
              <li className="li1">
                <NavLink
                  to="/About"
                  onClick={() => history.push("/About")}
                  exact
                  strict
                  activeStyle={{ color: "#f0c151" }}
                  className="menuButtons"
                >
                  About
                </NavLink>
              </li>
              <li className="li1">
                <NavLink
                  to="/Contact"
                  exact
                  strict
                  onClick={() => history.push("/Contact")}
                  activeStyle={{ color: "#f0c151" }}
                  className="menuButtons"
                >
                  Contact
                </NavLink>
              </li>
            <li className="li1">
              <NavLink
                  to="/Tutorial"
                  exact
                  strict
                  onClick={() => console.log(this.props.autentication)}
                  activeStyle={{ color: "#f0c151" }}
                  className="menuButtons"
              >
                Tutorials
              </NavLink>
            </li>
            <li className="li1">
              <PersonIcon
                  fontSize="large"
                  color="#fafafa"
                  onClick={handleClick}
                  className="iconPerson"
                  hover
              >
                Open Menu
              </PersonIcon>
              <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
                <StyledMenuItem onClick={()=>{history.push("/Login"); handleClose()}}>
                  <ListItemIcon>
                    <LockOpenIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Log in"  />
                </StyledMenuItem>
              </StyledMenu>
            </li>
          </ul>
          </BrowserRouter>
        </Fade>

      </div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/About" exact strict component={About} />
          <Route path="/Contact" exact strict component={Contact} />
          <Route path="/Login" exact strict component={Login} />
          <Route path="/Register" exact strict component={Register} />
          <Route path="/Tutorial" exact strict component={Tutorial} />
          <Route path="/TutorialView" exact strict component={TutorialPage}/>
          <Route path="/AddTutorial" exact strict component={AddTutorial}/>
        </Switch>
      </Router>
      <div className="bottom">
        <Fade>
          <div className="gridBottom">
            <img className="logoBottom" src={require("./Logo.png")} />
            <br />
            <div className="socialMedia">
              <img className="socialIcon" src={require("./facebook.png")} />
              <img className="socialIcon" src={require("./instagram.jpg")} />
              <img className="socialIcon" src={require("./youtube.jpg")} />
            </div>
            <p className="textCopyright">
              © 2020 by Creative Creators
              <br />
              Created with React JS
            </p>
          </div>
          <div className="gridBottom">
            <h1 className="titleBottom">HOURS OF CONTACT</h1>
            <p className="textBottom">
              Mon-Thu: 9AM to 8PM
              <br />
              Friday: 9AM to 3PM
              <br />
              Sat-Sun: Closed
            </p>
          </div>
          <div className="gridBottom">
            <h1 className="titleBottom">CONTACT US</h1>
            <p className="textBottom">
              500 Random Street
              <br />
              San Francisco, CA 95124
              <br />
              <br />
              Mail:random@mydomain.com
              <br />
              Tel: 123-456-7890
            </p>
          </div>
          <div className="gridBottom">
            <h1 className="titleBottom">TO DO</h1>
            <p className="textBottom">
              500 Random Street
              <br />
              San Francisco, CA 95124
              <br />
              <br />
              Mail:random@mydomain.com
              <br />
              Tel: 123-456-7890
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
const _App = connect(
    state => ({
      authentication: state.authentication
    })
)(App);
