import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./AddTutorial.scss";
import {
  withStyles,
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
const CssTextFieldTutorial = withStyles({
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

export class AddTutorial extends Component {
  state = {};
  render() {
    return (
      <div className="base-containerAddTutorial">
        <div className="contentAddTutorial">
          <CssTextFieldTutorial
            required
            label="Title"
            variant="outlined"
            id="title"
            color="rgba(255, 105, 135, .3)"
          />
          <CssTextFieldTutorial
              margin="normal"
              required
              multiline
              rows={5}
              id="description"
              label="Description"
              name="description"
              variant="outlined"
              color="rgba(255, 105, 135, .3)"
          />
          <CssTextFieldTutorial
            margin="normal"
            required
            id="video"
            label="Youtube Link"
            name="video"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
          />

          <Button
              variant="contained"
              component="label"
          >
            Upload Tutorial Thumbnail
            <input
                id="tutorialImage"
                type="file"
                style={{ display: "none" }}
            />

          </Button>
          <br/>
          <Button
              variant="contained"
              component="label"
          >
            Upload Tutorial Thumbnail
            <input
                id="tutorialImage"
                type="file"
                style={{ display: "none" }}
            />
          </Button>

          <Button style={style} size="medium" type="submit">
            Send
          </Button>
        </div>
      </div>
    );
  }
}

export default AddTutorial;
