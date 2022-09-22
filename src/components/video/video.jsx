import React from "react";
import "./video.css";
import { UserVideo } from "../../context/VideoContext";
import { Link } from "react-router-dom";
export function Video({ url }) {
  const { video } = UserVideo();
  return (
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
            >
              <source
                src={"http://127.0.0.1:8887/uploads/" + url}
                type="video/mp4"
              />
            </video>
            <div className="ytd-video-primary-info-rendered">
              {video == null
                ? null
                : video.map((vid) => {
                    if (vid.videofile == url) {
                      return <p>{vid.title}</p>;
                    }
                  })}
              <div className="ytd-video-primary-actions-buttons">
                <div className="info-text"></div>
                <div className="action-tools"></div>
              </div>
            </div>

            <div className="ytd-item-rendered-section">
              <div className="ytd-comments-header-renderer">
                <div className="ytd-comments-thread-renderer">
                  <div className="ytd-comments-renderer">
                    <div className="style-scope ytd-comments-renderer">
                      <div className="authorImg ytd-comments-renderer">
                        <img></img>
                      </div>
                      <div className="main ytd-comments-renderer">
                        <div className="header"></div>
                        <div className="comment-content"></div>
                        <div className="ytd-comments-actions-buttons"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                              src={"http://127.0.0.1:8887/images/" + vid.photo}
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
  );
}
