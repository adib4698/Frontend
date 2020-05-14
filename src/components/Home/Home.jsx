import React, { Component } from "react";
import "./Home.scss";
import { BrowserRouter, NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";
export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="background">
        <div className="part1">
          {/* <div className="table">
            <img className="logo" src={require("./Logo.png")} />
            <Fade>
              <ul className="menubar">
                <BrowserRouter>
                  <li className="li1">
                    <NavLink
                      to="/"
                      exact
                      strict
                      activeStyle={{ color: "#f0c151" }}
                      className="menuButtons"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="li1">
                    <NavLink
                      to="/About"
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
                      activeStyle={{ color: "#f0c151" }}
                      className="menuButtons"
                    >
                      Contact
                    </NavLink>
                  </li>
                </BrowserRouter>
              </ul>
            </Fade>
          </div> */}
          <div className="upperText">
            <Fade>
              {" "}
              <p>MAXIMIZE YOUR FULL POTENTIAL.</p>
            </Fade>
          </div>

          <div className="lowerText">
            <Fade>
              <p>From creators, for creators.</p>
            </Fade>
          </div>
        </div>
        <div className="part2" id="About">
          <div className="textAbout">
            <Fade bottom>
              <h1 className="paragraphsHead">About</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
            </Fade>
          </div>
          <Fade>
            <img src={require("./Coffee.jpg")} className="imgAbout" />
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
