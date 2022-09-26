import React from "react";
import "./video.css";
import { UserVideo } from "../../context/VideoContext";
import { Link } from "react-router-dom";
import likeButton from "./like.png";
import dislikeButton from "./dislike.png";
import shareButton from "./share.png";
import saveButton from "./save.png";
import { useRef, useState, useEffect } from "react";
import { Comments } from "../comments/comment";
export function Video({ url }) {
  const [videoWidth, setVideoWidth] = useState(0);
  const { video } = UserVideo();
  const videoRef = useRef();
  useEffect(() => {
    setVideoWidth(videoRef.current.offsetWidth);
  }, []);
  return (
    <>
      <div className="container-main">
        <div className="container-fluid main">
          <div className="video-container">
            <div className="left-side">
              <video
                className="fm-video"
                data-setup="{}"
                controls
                autoPlay
                id="fm-video"
                ref={videoRef}
              >
                <source
                  src={"http://127.0.0.1:8887/uploads/" + url}
                  type="video/mp4"
                />
              </video>
              {video == null
                ? null
                : video.map((vid) => {
                    if (vid.videofile == url) {
                      return (
                        <>
                          <div className="ytd-video-primary-info-rendered">
                            <p>{vid.title}</p>
                            <div className="ytd-video-primary-actions-buttons">
                              <div className="info-text">
                                31,418 vistas • 26 feb 2021
                              </div>
                              <div className="action-tools">
                                <div className="container-tools">
                                  <div className="like action-button">
                                    <img src={likeButton}></img>
                                    <b>0</b>
                                  </div>
                                  <div className="dislike action-button">
                                    <img src={dislikeButton}></img>
                                    <b>No me gusta</b>
                                  </div>
                                  <div className="share action-button">
                                    <img src={shareButton}></img>
                                    <b>Compartir</b>
                                  </div>
                                  <div className="save action-button">
                                    <img src={saveButton}></img>
                                    <b>Guardar</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ytd-video-secondary-info-rendered">
                            <div className="top-row">
                              <div className="info-secondary-principals">
                                <img
                                  src={vid.userImg}
                                  width="35px"
                                  height="35px"
                                  referrerPolicy="no-referrer"
                                  alt="user-uploader-video"
                                  className="userImg"
                                ></img>
                                <div className="info-channel">
                                  <p className="channel-name">{vid.name}</p>
                                  <p className="channel-suscribers">
                                    6,950 suscriptores
                                  </p>
                                </div>
                              </div>
                              <div className="suscribe-buttons">
                                <button>Suscribirse</button>
                              </div>
                            </div>
                            <div className="content">{vid.description}</div>
                          </div>
                        </>
                      );
                    }
                  })}
              <Comments onVideoWidth={videoWidth} />
            </div>
            <div className="right-side">
              {video == null
                ? null
                : video.map((vid) => {
                    if (vid.videofile != url) {
                      return (
                        <Link
                          to={`/watch/${vid.videofile}`}
                          reloadDocument
                          className="link-to"
                          key={vid._id}
                        >
                          <div className="compact-video-rendered" key={vid._id}>
                            <div className="img-video-rendered">
                              <img
                                src={
                                  "http://127.0.0.1:8887/images/" + vid.photo
                                }
                              ></img>
                            </div>
                            <div className="info-video-rendered">
                              <div className="title">{vid.title}</div>
                              <div className="userViewinfo">
                                <div className="userViewinfo-div">
                                  <div className="user-upload">{vid.name}</div>
                                  <div className="video-views">
                                    270 Mill. Views
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    }
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
