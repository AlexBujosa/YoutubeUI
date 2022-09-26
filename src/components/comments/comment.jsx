import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { PersonalComment } from "./personalcomment/personalComment";
export function Comments({ onVideoWidth }) {
  const { user } = UserAuth();
  return (
    <div className="ytd-item-rendered-section">
      <div className="ytd-comments-header-renderer">
        <div className="title">
          <p>0 Comentarios</p>
        </div>
        <div className="ytd-simplebox-renderer">
          {user == null ? null : (
            <>
              <img
                src={user.img}
                width="35px"
                height="35px"
                className="userImg"
              ></img>
              <div className="add-comments">
                <span
                  className="new-comment"
                  contentEditable="true"
                  data-text="Agrega un comentario..."
                  aria-multiline="true"
                  style={{ maxWidth: onVideoWidth - 43 + "px" }}
                ></span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="contents-comments">
        <PersonalComment onVideoWidth={onVideoWidth} />
      </div>
    </div>
  );
}
