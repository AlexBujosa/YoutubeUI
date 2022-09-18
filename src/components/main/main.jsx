import React from "react";
import picturetest from "./mira.png";
import { Row, Col } from "react-bootstrap";
import { Option } from "../option/option";
import { UserAuth } from "../../context/AuthContext";
import "./main.css";
export function Main() {
  const { user, logOut } = UserAuth();
  return (
    <div className="container-main">
      {user === null ? null : (
        <Option img={user.img} name={user.name} logOut={logOut} />
      )}
      <div className="container-fluid main">
        <Row>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} lg={2} className="ytd-item-render">
            <div className="container-col">
              <div className="video-div">
                <img
                  src={picturetest}
                  alt="picturetest"
                  className="picture-video"
                ></img>
              </div>
              <div className="video-info-container">
                <div className="title-div">
                  <span className="title-video">
                    Mix - Abraham Mateo, Farruko, Christian Daniel - Loco
                    Enamorado Video Oficial
                  </span>
                </div>
                <div className="info-div">
                  <span className="Chanel">Abraham Mateo</span>
                  <br />
                  <span className="info-video">264 M views 3 years ago</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
