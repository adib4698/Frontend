import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./AddTutorial.scss";
import {
  withStyles,
} from "@material-ui/core/styles";
import {tutorialAction} from "../../../actions/tutorialAction"
import {connect} from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

const CssFormControl = withStyles({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {

  },
})(FormControl);

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      video: '',
      archive: '',
      photo: '',
      category: ''
  };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { title,description,video,archive,photo,category } = this.state;
    if (title && description && video && archive && photo && category) {
      this.props.addTutorial(title,description,video,archive,photo,category);
    }
  }
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
            onChange={()=>{this.setState({title: document.getElementById("title").value})}}
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
              onChange={()=>{this.setState({description: document.getElementById("description").value})}}
          />
          <CssTextFieldTutorial
            margin="normal"
            required
            id="video"
            label="Youtube Link"
            name="video"
            variant="outlined"
            color="rgba(255, 105, 135, .3)"
            onChange={()=>{this.setState({video: document.getElementById("video").value})}}
          />

          <CssTextFieldTutorial
              margin="normal"
              required
              id="archive"
              label="We Transfer Archive Link"
              name="archive"
              variant="outlined"
              color="rgba(255, 105, 135, .3)"
              onChange={()=>{this.setState({archive: document.getElementById("archive").value})}}
          />
          <br/>
          <CssTextFieldTutorial
              margin="normal"
              required
              id="photo"
              label="Link to profile photo"
              name="photo"
              variant="outlined"
              color="rgba(255, 105, 135, .3)"
              onChange={()=>{this.setState({photo: document.getElementById("photo").value})}}
          />
          <CssFormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="category"
                value={this.state.category}
                onChange={(event)=>{this.setState({category: event.target.value})}}
            >
              <MenuItem value={"Photoshop"}>Photoshop</MenuItem>
              <MenuItem value={"Lightroom"}>Lightroom</MenuItem>
              <MenuItem value={"Premiere"}>Premiere</MenuItem>
              <MenuItem value={"AfterEffects"}>After Effects</MenuItem>
              <MenuItem value={"Ilustrator"}>Ilustrator</MenuItem>
            </Select>
          </CssFormControl>
          <Button style={style} size="medium" type="submit" onClick={this.handleSubmit.bind(this)}>
            Add Tutorial
          </Button>
        </div>
      </div>
    );
  }
}


const actionCreators = {
  addTutorial: tutorialAction.addTutorial,
};

const connectedAddTutorialPage = connect(null,actionCreators)(AddTutorial);
export { connectedAddTutorialPage as AddTutorial };

