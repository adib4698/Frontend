import React, {Component} from "react";
import {connect} from "react-redux";
import {tutorialAction} from "../../actions";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from "react-reveal/Fade";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./Tutorial.scss";
import {history} from "../../helpers/history";
import ButtonBase from '@material-ui/core/ButtonBase';
import {withStyles} from "@material-ui/core/styles";

const CardNou = withStyles({
      root: {
        maxWidth: 400,
      },
  })(Card);


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
    //const dispatch = useDispatch();
    {console.log(this.props)}
    let {tutorials} = this.props;
    return( <div className="baseContainer">
      <div className="menuLeft">
        <p id="Photoshop" className="elementLista" onClick={()=>{history.push("/AddTutorial")}}>Add Tutorial</p>
        <ul className="lista" onClick={(event)=>{this.updateSearchCategory(event)}}>
          <li id="Photoshop" className="elementLista">Photoshop</li>
          <li id="Lightroom" className="elementLista">Lightroom</li>
          <li id="Premiere" className="elementLista">Premiere</li>
          <li id="AfterEffects" className="elementLista">After Effects</li>
          <li id="Ilustrator" className="elementLista">Illustrator</li>
        </ul>
      </div>
      <div className="displayElements">
        <Grid container spacing={2}>
        {tutorials.items !== undefined && tutorials.items.filter(tutorial => tutorial.category===this.state.searchCategory).map(tutorial => (

            <Grid item xs={3}>
               <div className="itemGrid">
               <Fade>

                 <CardNou>
                   <ButtonBase
                       onClick={() => {

                         history.push({
                           pathname: '/TutorialView',
                           state: {tutorial:tutorial}
                         })
                        }}
                   >
                   <CardActionArea>
                     <CardMedia
                         component="img"
                         alt="Contemplative Reptile"
                         height="250"
                         image={tutorial.tutorialProfile}
                         title="Contemplative Reptile"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="h2">
                         {tutorial.title}
                       </Typography>
                     </CardContent>
                   </CardActionArea>
                 {/*<img src={require("./tutorialImages/Input.png")} className="imagine" />*/}
                {/*<h2 className="titleTutorial">{tutorial.title}</h2>*/}
                   </ButtonBase>
                 </CardNou>
             </Fade>
             </div>
            </Grid>
        ))}
        </Grid>
      </div>
    </div>
    )
  }

  updateSearchCategory(event) {
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
