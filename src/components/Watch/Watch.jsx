import { useParams } from "react-router-dom";
import React from "react";
import { Video } from "../video/video";
export function Watch() {
  let params = useParams();

  return <Video url={params.linkId} />;
}
