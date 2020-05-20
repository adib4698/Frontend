import  React from 'react';
import Fade from "react-reveal/Fade";
import ReactPlayer from 'react-player'
import "./TutorialPage.scss"
export class TutorialPage extends React.Component{

    constructor(props) {
        super(props);
    }
render(){
            const t = this.props.location.state.tutorial;
            return <div className="baseContainerView">
                    <div className="part1View">
                        <h1 className="title">{t.title}</h1>
                        <div className="video-description">
                            <ReactPlayer className='react-player' url='https://youtu.be/idEuqizwwUY' width="800px" height="400px"/>
                            <h1 className="descriptionView">{t.description}</h1>
                        </div>
                    </div>
                <div className="part2View">
                    <h1 className="downloadText">Want to use tutorial offline? Download photos</h1>
                </div>
                </div>


    };
}