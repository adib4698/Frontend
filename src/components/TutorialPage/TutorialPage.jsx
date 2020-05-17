import  React from 'react';
import Fade from "react-reveal/Fade";

export class TutorialPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            tutorial: this.props.tutorial,
        };
    }
render(){

            return <div className="baseContainer">
                    <div className="menuLeft">
                        <ul className="lista" onClick={(event)=>{this.updateSearchCategory(event)}}>
                            <li id="Photoshop" className="elementLista">Photoshop</li>
                            <li id="Lightroom" className="elementLista">Lightroom</li>
                            <li id="Premiere" className="elementLista">Premiere</li>
                            <li className="elementLista">After Effects</li>
                            <li className="elementLista">Illustrator</li>
                        </ul>
                    </div>
                    <div className="displayElements">

                    </div>
                </div>


    };
}