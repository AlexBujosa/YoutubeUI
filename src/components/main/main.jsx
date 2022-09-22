import React from "react";
//import picturetest from "./mira.png";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./main.css";
import { UserVideo } from "../../context/VideoContext";
export function Main() {
  const { video } = UserVideo();
  return (
    <div className="container-main">
      <div className="container-fluid main">
        <Row>
          {video == null
            ? null
            : video.map((vid) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={2}
                    className="ytd-item-render"
                    key={vid._id}
                  >
                    <Link to={`/watch/${vid.videofile}`} className="link-to">
                      <div className="container-col">
                        <div className="video-div">
                          <img
                            src={"http://127.0.0.1:8887/images/" + vid.photo}
                            alt={vid._id}
                            className="picture-video"
                          ></img>
                        </div>
                        <div className="video-info-container">
                          <div className="title-div">
                            <span className="title-video">{vid.title}</span>
                          </div>
                          <div className="info-div">
                            <span className="Chanel">{vid.name}</span>
                            <br />
                            <span className="info-video">
                              264 M views 3 years ago
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Col>
                );
              })}
        </Row>
      </div>
    </div>
  );
}
