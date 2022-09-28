import React from "react";
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { NewComment } from "./newcomment/newComment";
import { PersonalComment } from "./personalcomment/personalComment";
export function Comments({ onVideoWidth, onVideoId }) {
  const [counter, SetCounter] = useState(0);
  const { user } = UserAuth();
  const [comments, SetComments] = useState(null);
  const onSendComment = (newComment) => {
    SetComments((oldComments) => {
      return [...oldComments, newComment];
    });
    SetCounter((oldCounter) => {
      return oldCounter + 1;
    });
  };
  const GetComments = async () => {
    await fetch("http://localhost:4000/getComments", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoId: onVideoId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        SetCounter(res.comments.length);
        SetComments(res.comments);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    GetComments();
  }, []);
  return (
    <div className="ytd-item-rendered-section">
      <div className="ytd-comments-header-renderer">
        <div className="title">
          <p>{counter} Comentarios</p>
        </div>
        <div className="ytd-simplebox-renderer">
          {user == null ? null : (
            <>
              <NewComment
                onUserImg={user.img}
                onWidth={onVideoWidth}
                onImgHeight="35px"
                onImgWidth="35px"
                onVideoId={onVideoId}
                onSendComment={(newComment) => {
                  onSendComment(newComment);
                }}
              />
            </>
          )}
        </div>
      </div>
      <div className="contents-comments">
        {comments === null
          ? null
          : comments.map((comment) => {
              return (
                <PersonalComment
                  onVideoWidth={onVideoWidth}
                  onChannelName={comment.name}
                  onCommentId={comment._id}
                  onComment={comment.comment}
                  onPublishComment={comment.createdAt}
                  onUserImg={comment.userImg}
                  key={comment._id}
                />
              );
            })}
      </div>
    </div>
  );
}
