import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
const VideoContext = createContext();
export const VideoContextProvider = ({ children }) => {
  const [video, setVideo] = useState(null);
  const GetVideo = () => {
    return fetch("http://localhost:4000/", {
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
  }, []);
  return (
    <VideoContext.Provider value={{ video, loadMoreVideos }}>
      {children}
    </VideoContext.Provider>
  );
};
export const UserVideo = () => {
  return useContext(VideoContext);
};
