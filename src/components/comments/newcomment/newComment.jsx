import React, { useState, useRef } from "react";
import { UserAuth } from "../../../context/AuthContext";
import { v4 as uuidv4 } from "uuid";
export function NewComment({
  onWidth,
  onImgWidth,
  onImgHeight,
  onUserImg,
  onVideoId,
  onSendComment,
}) {
  const { id, user } = UserAuth();
  const [_, setMyComment] = useState("");
  const commentRef = useRef();
  const btnCommentRef = useRef();
  const simpleboxRef = useRef();
  const onInputSpan = () => {
    if (commentRef.current.innerText === "") {
      btnCommentRef.current.classList.remove("comment-blue");
    } else {
      btnCommentRef.current.classList.add("comment-blue");
    }
    simpleboxRef.current.classList.remove("btn-ytd-simplebox-none");
    setMyComment(commentRef.current.innerText);
  };
  const cancelBtn = () => {
    commentRef.current.innerText = "";
    simpleboxRef.current.classList.add("btn-ytd-simplebox-none");
    btnCommentRef.current.classList.remove("comment-blue");
  };
  const submitComment = () => {
    if (commentRef.current.innerText === "") return;
    fetch("http://localhost:4000/comment", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        userComment: commentRef.current.innerText,
        videoId: onVideoId,
        name: user.name,
        userImg: user.img,
      }),
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
    onSendComment({
      comment: commentRef.current.innerText,
      name: user.name,
      userId: id,
      videoId: onVideoId,
      userImg: user.img,
      createdAt: new Date(Date.now()),
      _id: uuidv4(),
    });
    cancelBtn();
  };
  return (
    <>
      <div className="ytd-simplebox-new-comment">
        <img
          src={onUserImg}
          width={onImgWidth}
          height={onImgHeight}
          className="userImg"
        ></img>
        <div className="add-comments">
          <span
            className="new-comment"
            contentEditable="true"
            data-text="Agrega un comentario..."
            aria-multiline="true"
            style={{ maxWidth: onWidth - 43 + "px" }}
            ref={commentRef}
            onInput={() => {
              onInputSpan();
            }}
            onFocus={() => {
              simpleboxRef.current.classList.remove("btn-ytd-simplebox-none");
            }}
          ></span>
        </div>
      </div>
      <div
        className="btn-ytd-simplebox btn-ytd-simplebox-none"
        ref={simpleboxRef}
      >
        <div>
          <div
            className="cancel"
            onClick={() => {
              cancelBtn();
            }}
          >
            <p>Cancelar</p>
          </div>
          <div
            className="comment"
            ref={btnCommentRef}
            onClick={() => {
              submitComment();
            }}
          >
            <p>Comentar</p>
          </div>
        </div>
      </div>
    </>
  );
}
