import React from "react";
import "./Body.css";
import img from "../../images/imagen.jpg";
import avatar from "../../images/avatar.jpg";
export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeDetail: true,
      fade: "fadeIn"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.state.fade === "fadeIn"
      ? this.setState({ fade: "fadeOut" }, () => {})
      : this.setState({ fade: "fadeIn" }, () => {});
    if (this.state.seeDetail === true) {
      setTimeout(() => {
        this.setState({ seeDetail: false });
      }, 300);
    } else {
        this.setState({ seeDetail: true });
    }
  }
  render() {
    return (
      <div>
        <div className="row imgContainer">
          <div className="col-6">
            <img
              className="img"
              src={img}
              onClick={this.handleClick}
              alt="imagen"
            />
          </div>
        </div>

        {this.state.seeDetail ? (
          <div className={`row txtContainer ${this.state.fade}`}>
            <div className="col-6">
              <div className="row">
                <div className="textInfo col-6">
                  <div className="date">
                    <p>31/01/14</p>
                  </div>
                  <div className="title">
                    <p>Evolución permanente por objetivos online</p>
                  </div>
                  <div className="avatarContainer">
                    <div className="avatar">
                      <img
                        src={avatar}
                        alt="avatar"
                        onClick={this.handleColor}
                      />
                      <div className="avatarName">
                        <p>Sergio</p>
                        <p>Sanchez</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="textBody col-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod, Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod, Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod
                  </p>
                  <br/>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
