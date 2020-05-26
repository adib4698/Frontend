import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./Login.scss";
import { BrowserRouter, NavLink } from "react-router-dom";
import {userAction} from "../../actions/userAction";
import { connect } from "react-redux";
import {history} from "../../helpers";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

const style = {
  background:
    "linear-gradient(90deg, rgba(240,193,81,1) 0%, rgba(247,180,20,1) 100%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 40,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  margin: 20,
  "&:hover": {
    backgroundColor: "#fff",
  },
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#f0c151",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#f0c151",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f0c151",
      },
      "&:hover fieldset": {
        borderColor: "#f0c151",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f0c151",
      },
    },
  },
  input: {
    color: "white",
  },
})(TextField);

class Login extends Component {
    constructor(props) {
      super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }
  render(){
    return (
      <div className="base-container">
        <div className="content">
          <CssTextField
            margin="normal"
            required
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({username: document.getElementById("username").value})}}
          />
          <CssTextField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            color="#ffffff"
            onChange={()=>{this.setState({password: document.getElementById("password").value})}}
          />
          <Button style={style} size="medium" type="submit" onClick={this.handleSubmit.bind(this)}>
            Login
          </Button>
          <BrowserRouter>
            <NavLink to="/Register" exact strict className="nav">
              <p onClick={()=>history.push("./Register")} className="register">Not a member yet? Sign up here!</p>
            </NavLink>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { loggingIn } = state.authentication;
  return { loggingIn };
}

const actionCreators = {
  login: userAction.login,
 };

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
