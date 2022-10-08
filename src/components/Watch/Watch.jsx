import { useParams } from "react-router-dom";
import React from "react";
import { Video } from "../video/video";
import { UserAuth } from "../../context/AuthContext";
export function Watch() {
  const { count, id } = UserAuth();
  let params = useParams();
  return <>{count !== 0 ? <Video url={params.linkId} userId={id} /> : null}</>;
}
