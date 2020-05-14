import React, {Component} from "react";
import {connect} from "react-redux";
import {tutorialAction} from "../../actions";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./Tutorial.scss";
class Tutorial extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchCategory: "Photoshop",
    };
  }

  componentDidMount() {
    this.props.getTutorials();
  }

  render() {
    let {tutorials} = this.props;
    return <div className="baseContainer">
      <div className="menuLeft">
        <ul className="lista" onClick={(event)=>{this.updateSearchCategory(event)}}>
          <li id="Photoshop" className="elementLista">Photoshop</li>
          <li id="2" className="elementLista">Lightroom</li>
          <li id="3" className="elementLista">Premiere</li>
          <li className="elementLista">After Effects</li>
          <li className="elementLista">Illustrator</li>
        </ul>
      </div>
      <div className="displayElements">
        <Grid container spacing={2}>
        {tutorials.items !== undefined && tutorials.items.map(tutorial => (
            <Grid item xs={4}>
             {tutorial.category === this.state.searchCategory && tutorial.title}
            </Grid>
        ))}
        </Grid>
      </div>
    </div>;
  }

  updateSearchCategory(event) {
    console.log(event.target.id);
    this.setState({searchCategory:event.target.id})
  }
}

function mapState(state) {
  const {tutorials} = state;
  return {tutorials};
}

const actionCreators = {
  getTutorials: tutorialAction.getAllTutorials,
};

const connectedHomePage = connect(mapState, actionCreators)(Tutorial);

export { connectedHomePage as Tutorial };
