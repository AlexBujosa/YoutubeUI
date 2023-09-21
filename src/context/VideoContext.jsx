import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { GetAllViews } from "../getviews";
const VideoContext = createContext();
export const VideoContextProvider = ({ children }) => {
  const [video, setVideo] = useState(null);
  const [_, SetCounter] = useState(0);
  const [videoViews, setVideoViews] = useState(null);
  const [suscribedChannel, setSuscribedChannel] = useState(null);
  const GetVideo = () => {
    return fetch(`${process.env.REACT_APP_BACKEND_URI}/`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadMoreVideos = () => {
    setVideo((oldVideos) => {
      return [...oldVideos];
    });
  };
  useEffect(() => {
    if (video === null) {
      GetVideo().then((res) => {
        setVideo(res.videos);
      });
    }
    SetCounter((oldCounter) => {
      if (oldCounter % 2 === 0) {
        GetAllViews().then((res) => {
          if (res.views.length === 0) {
            setVideoViews(res.views);
            return;
          }
          res.views.map((view) => {
            setVideoViews((oldView) => {
              if (oldView === null) {
                oldView = [];
                oldView.push(view.videoId);
                return oldView;
              } else {
                oldView.push(view.videoId);
                return oldView;
              }
            });
          });
        });
        return oldCounter + 1;
      }
    });
  }, []);
  return (
    <VideoContext.Provider
      value={{
        video,
        loadMoreVideos,
        videoViews,
        suscribedChannel,
        setSuscribedChannel,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export const UserVideo = () => {
  return useContext(VideoContext);
};
