import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {contactAction} from '../../actions/index'
import "./Contact.scss";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import {tutorialAction} from "../../actions";
import {connect} from "react-redux";

const style = {
  borderRadius: 3,
  border: 10,
  borderColor: "grey.500",
  color: "white",
  height: 40,
  padding: "0 30px",
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
      borderBottomColor: "black",
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

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      comments:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { firstName, lastName, email, phone,comments } = this.state;
    if (firstName && lastName && email && phone && comments) {
      this.props.addContact(firstName, lastName, email, phone,comments);
    }
  }
  render() {
    return (
      <div className="base-containerContact">
        <div className="contentContact">
          <CssTextField
            required
            label="First Name"
            variant="outlined"
            autoComplete="firstname"
            id="first-name"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({firstName: document.getElementById("first-name").value})}}
          />
          <CssTextField
            margin="normal"
            required
            id="last-name"
            label="Last Name"
            name="Last-name"
            autoComplete="lastname"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({lastName: document.getElementById("last-name").value})}}
          />
          <CssTextField
            margin="normal"
            required
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({email: document.getElementById("email").value})}}
          />
          <CssTextField
            margin="normal"
            required
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({phone: document.getElementById("phone").value})}}
          />
          <CssTextField
            margin="normal"
            required
            multiline
            rows={5}
            id="comments"
            label="Comments"
            name="comments"
            autoComplete="comments"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({comments: document.getElementById("comments").value})}}
          />
          <Button style={style} size="medium" type="submit"  onClick={this.handleSubmit.bind(this)}>
            Send
          </Button>
        </div>
      </div>
    );
  }
}

const actionCreators = {
  addContact: contactAction.addContact,
};

const connectedContactPage = connect(null,actionCreators)(Contact);
export { connectedContactPage as Contact };
