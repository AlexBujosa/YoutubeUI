import React from "react";
import { month } from "../../moth";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./main.css";
import { UserVideo } from "../../context/VideoContext";
export function Main() {
  const { video, videoViews } = UserVideo();
  return (
    <div className="container-main">
      <div className="container-fluid main">
        <Row>
          {video === null || videoViews === null
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
                    <Link to={`/watch/${vid._id}`} className="link-to">
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
                              {
                                <>
                                  {
                                    videoViews.filter(
                                      (videoId) => videoId === vid._id
                                    ).length
                                  }
                                </>
                              }
                              {" vistas "}
                              {new Date(vid.createdAt).getDate()}{" "}
                              {month[new Date(vid.createdAt).getMonth()]}{" "}
                              {new Date(vid.createdAt).getFullYear()}
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
