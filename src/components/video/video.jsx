import React from "react";
import "./video.css";
export function Video({ url }) {
  return (
    <div className="container-main">
      <div className="container-fluid main">
        <div className="video-container">
          <video
            className="fm-video video-js vjs-16-9 vjs-big-play-centered"
            data-setup="{}"
            controls
            id="fm-video"
          >
            <source
              src={"http://127.0.0.1:8887/uploads/" + url}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
