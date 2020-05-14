import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { spacing } from "@material-ui/system";
import "./Contact.scss";
import { BrowserRouter, NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";

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

export class Contact extends Component {
  state = {};
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
          />
          <Button style={style} size="medium" type="submit">
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
