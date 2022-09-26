import React, { useRef, useEffect, useState } from "react";
export function PersonalComment({ onVideoWidth }) {
  const commentRef = useRef();
  const [moreComment, setMoreComment] = useState(false);
  const [counter, setCounter] = useState(0);
  const spanContent = ["Show More", "Show Less"];
  const className = ["div-comment-more", "div-comment-less"];
  useEffect(() => {
    setMoreComment(commentRef.current.scrollHeight > 62);
  }, []);
  return (
    <div className="ytd-comments-thread-renderer">
      <div className="ytd-comments-renderer">
        <div className="style-scope ytd-comments-renderer">
          <div className="authorImg ytd-comments-renderer">
            <img
              src="https://lh3.googleusercontent.com/a-/AFdZucoNvT-I0n2tcZT9WK-zj2lCbyZEd0e_5RiwRw4n=s96-c"
              width="30px"
              height="30px"
              className="userImg"
            ></img>
          </div>
          <div className="main-ytd-comments-renderer">
            <div className="header">
              <p className="channel-name">AlexBj</p>
              <p className="publish-comment">hace 2 semanas</p>
            </div>
            <div
              className="comment-content"
              style={{ maxWidth: onVideoWidth - 43 + "px" }}
              id="comentario-f1"
            >
              <div className={className[counter % 2]} ref={commentRef}>
                A lot of people probably didn't expect to feel real and
                relatable emotions in this show, especially Gojo's struggle and
                fears. Gojo is the perfect MC for this genre, in fact, I could
                say he's the best and most realistic out of all the lads in the
                genre. Gojo is the perfect MC for this genre, in fact, I could
                say he's the best and most realistic out of all the lads in the
                genre. Gojo is the perfect MC for this genre, in fact, I could
                say he's the best and most realistic out of all the lads in the
                genre.
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
