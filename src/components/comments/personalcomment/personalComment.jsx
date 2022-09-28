import React, { useRef, useEffect, useState } from "react";
import { timeago } from "../../../timeago";
export function PersonalComment({
  onVideoWidth,
  onCommentId,
  onChannelName,
  onPublishComment,
  onComment,
  onUserImg,
}) {
  const [_, setWindowsWidthDimension] = useState(window.innerWidth);
  const [comment, setComment] = useState("");
  var month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const commentRef = useRef();
  const [moreComment, setMoreComment] = useState(false);
  const [counter, setCounter] = useState(0);
  const spanContent = ["Show More", "Show Less"];
  const className = ["div-comment-more", "div-comment-less"];
  useEffect(() => {
    function handleResize() {
      setWindowsWidthDimension((oldWindowsWidth) => {
        if (oldWindowsWidth !== window.innerWidth) {
          setMoreComment(commentRef.current.scrollHeight > 62);
          return window.innerWidth;
        }
      });
    }
    setMoreComment(commentRef.current.scrollHeight > 62);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("rezise", handleResize);
  }, []);
  useEffect(() => {
    setComment(timeago(onPublishComment));
  }, []);
  return (
    <div className="ytd-comments-thread-renderer" key={onCommentId}>
      <div className="ytd-comments-renderer">
        <div className="style-scope ytd-comments-renderer">
          <div className="authorImg ytd-comments-renderer">
            <img
              src={onUserImg}
              width="30px"
              height="30px"
              className="userImg"
            ></img>
          </div>
          <div className="main-ytd-comments-renderer">
            <div className="header">
              <p className="channel-name">{onChannelName}</p>
              <p className="publish-comment">{comment}</p>
            </div>
            <div
              className="comment-content"
              style={{ maxWidth: onVideoWidth - 43 + "px" }}
              id="comentario-f1"
            >
              <div className={className[counter % 2]} ref={commentRef}>
                {onComment}
              </div>
              {moreComment ? (
                <span
                  htmlFor="comentario-f1"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  {spanContent[counter % 2]}
                </span>
              ) : null}
            </div>
            <div className="ytd-comments-actions-buttons"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
