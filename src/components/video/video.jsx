import React, { useRef, useState, useEffect } from "react";
import "./video.css";
import { UserVideo } from "../../context/VideoContext";
import { Link } from "react-router-dom";
import likeButton from "./like.png";
import dislikeButton from "./dislike.png";
import shareButton from "./share.png";
import saveButton from "./save.png";
import { Comments } from "../comments/comment";
import { getViews } from "../../getviews";
import { month } from "../../moth";
import { UserAuth } from "../../context/AuthContext";
export function Video({ url, userId }) {
  const [_, setWindowsWidthDimension] = useState(window.innerWidth);
  const [views, setViews] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const {
    video,
    videoViews,
    suscribedChannel,
    setSuscribedChannel,
  } = UserVideo();
  const { id } = UserAuth();
  const videoRef = useRef();

  const regView = () => {
    fetch("http://localhost:4000/register/views", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId: url,
        userId: userId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const GetAllSuscribedChannels = () => {
    if (userId === null) return;
    fetch("http://localhost:4000/getAllSuscribeChannel", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setSuscribedChannel(res.channelsSuscribed);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const suscribe = (userUploaderVideo) => {
    if (userId === null) return;
    fetch("http://localhost:4000/suscribe", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        secUserId: userUploaderVideo,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.msg === "Subscribed user") {
          setSuscribedChannel((oldSuscribedChannel) => {
            return [...oldSuscribedChannel, userUploaderVideo];
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    GetAllSuscribedChannels();
    getViews(url).then((res) => {
      setViews(res);
    });

    if (userId !== null) regView();
    function handleResize() {
      setWindowsWidthDimension((oldWindowsWidth) => {
        if (oldWindowsWidth != window.innerWidth) {
          setVideoWidth(videoRef.current.offsetWidth);
          return window.innerWidth;
        }
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("rezise", handleResize);
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
                {video === null
                  ? null
                  : video.map((vid) => {
                      if (vid._id == url) {
                        return (
                          <source
                            src={
                              "http://127.0.0.1:8887/uploads/" + vid.videofile
                            }
                            type="video/mp4"
                          />
                        );
                      }
                    })}
              </video>
              {video == null
                ? null
                : video.map((vid) => {
                    if (vid._id === url) {
                      return (
                        <>
                          <div className="ytd-video-primary-info-rendered">
                            <p>{vid.title}</p>
                            <div className="ytd-video-primary-actions-buttons">
                              <div className="info-text">
                                {views} {views > 1 ? "vistas" : "vista"} •{" "}
                                {new Date(vid.createdAt).getDate()}{" "}
                                {month[new Date(vid.createdAt).getMonth()]}{" "}
                                {new Date(vid.createdAt).getFullYear()}
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
                              {console.log(
                                userId !== vid.userId &&
                                  suscribedChannel !== null
                              )}
                              {userId !== vid.userId &&
                              suscribedChannel !== null ? (
                                <div className="suscribe-buttons">
                                  {suscribedChannel.filter(
                                    (suscribed) => suscribed === vid.userId
                                  ).length === 0 ? (
                                    <button
                                      onClick={() => {
                                        suscribe(vid.userId);
                                      }}
                                    >
                                      Suscribirse
                                    </button>
                                  ) : (
                                    <div className="already-suscriber">
                                      <p>Suscrito</p>
                                    </div>
                                  )}
                                </div>
                              ) : null}
                            </div>
                            <div className="content">{vid.description}</div>
                          </div>
                          <Comments
                            onVideoWidth={videoWidth}
                            onVideoId={vid._id}
                          />
                        </>
                      );
                    }
                  })}
            </div>
            <div className="right-side">
              {video == null
                ? null
                : video.map((vid) => {
                    if (vid._id != url) {
                      return (
                        <Link
                          to={`/watch/${vid._id}`}
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
                                    {videoViews !== null ? (
                                      <>
                                        {
                                          videoViews.filter(
                                            (videoId) => videoId === vid._id
                                          ).length
                                        }
                                      </>
                                    ) : null}
                                    {" vistas "}
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
