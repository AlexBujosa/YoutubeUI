import React, { useRef, useEffect, useState } from "react";
import Wnavbar from "./wnavbar.png";
import Youtube from "./youtube.png";
import Lup from "./lup.png";
import LeftArrow from "./leftarrow.png";
import video from "./videocamara.png";
import bell from "./bell.png";
import "./navbar.css";
import { UserAuth } from "../../context/AuthContext";
import { UploaderVideo } from "../uploader/Upload";
import { Link } from "react-router-dom";
export function Navbar(props) {
  const formRef = useRef();
  const inputSearchRef = useRef();
  const rnRef = useRef();
  const leftNav = useRef();
  const rightNav = useRef();
  const leftArrowRef = useRef();
  const submitSearchRef = useRef();
  const [counter, SetCounter] = useState(0);
  const [counterWidth, SetCounterWidth] = useState(0);
  const [visible, SetVisible] = useState(false);

  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.error(error);
    }
  };
  const openOption = () => {
    const option = document.getElementById("option");
    if (option.style.display === "none") {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  };
  const OpenSearch = async () => {
    leftArrowRef.current.style = "display:block";
    formRef.current.style = "display:flex";
    leftNav.current.style = "display:none";
    rightNav.current.style = "display:none";
    inputSearchRef.current.focus();
    SetCounter((oldCounter) => {
      oldCounter += 1;
      return oldCounter;
    });
  };
  const CloseSearch = async () => {
    leftArrowRef.current.style = "display:none";
    formRef.current.style = "display:none";
    leftNav.current.style = "display:flex";
    rightNav.current.style = "display:flex";
    SetCounter((oldCounter) => {
      oldCounter -= 1;
      return oldCounter;
    });
  };
  useEffect(() => {
    setInterval(() => {
      if (
        document.activeElement !== inputSearchRef.current &&
        window.innerWidth < 599 &&
        counter === 1
      ) {
        CloseSearch();
      } else if (
        document.activeElement === inputSearchRef.current &&
        window.innerWidth < 599 &&
        counter === 0
      ) {
        OpenSearch();
      }

      if (window.innerWidth > 599) {
        formRef.current.style = "display:flex";
        leftArrowRef.current.style = "display:none";
        leftNav.current.style = "display:flex";
        rightNav.current.style = "display:flex";
        SetCounterWidth((oldCounter) => {
          oldCounter = 0;
          return oldCounter;
        });
      } else if (counterWidth === 0) {
        SetCounterWidth((oldCounter) => {
          if (oldCounter === 0) {
            formRef.current.style = "display:none";
          }
          oldCounter = 1;
          return oldCounter;
        });
      }
    }, 100);
    return;
  });
  return (
    <div className="Navbar">
      <UploaderVideo visible={visible} SetVisible={SetVisible} />
      <div className="left-nav" ref={leftNav}>
        <img
          src={Wnavbar}
          alt="wnavbar"
          className="wnavbar"
          title="sidebar"
          onClick={props.openSidebar}
        ></img>
        <Link to="/" className="link-to logo-youtube" title="Home">
          <img src={Youtube} alt="youtube" className="youtube"></img>
          <p>Youtube</p>
        </Link>
      </div>
      <div className="center-nav">
        <form ref={formRef}>
          <img
            src={LeftArrow}
            alt="leftArrow"
            className="leftArrow"
            ref={leftArrowRef}
            onClick={() => CloseSearch()}
          ></img>
          <input
            type="text"
            className="search"
            placeholder="Buscar"
            name="search"
            ref={inputSearchRef}
          />
          <button type="submit" className="btn-submit">
            <img
              src={Lup}
              alt="lup"
              className="lup"
              ref={submitSearchRef}
            ></img>
          </button>
        </form>
      </div>
      <div className="right-nav" ref={rightNav}>
        <div className="rn-lup" onClick={() => OpenSearch()} ref={rnRef}>
          <img src={Lup} alt="lup" className="lup" title="Search"></img>
        </div>

        {user === null ? (
          <>
            <div>
              <span className="ico-threeDots" title="settings">
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path
                    fill="#ffff"
                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                  ></path>
                </svg>
              </span>
            </div>
            <div
              className="signIn-btn"
              title="Sign In"
              id="signIn-btn"
              onClick={handleGoogleSignIn}
            >
              <span
                data-testid="default-user"
                data-icon="default-user"
                className="personSvg"
              >
                <svg
                  viewBox="0 0 212 212"
                  width="20px"
                  height="20px"
                  className=""
                >
                  <path
                    fill="#222222"
                    className="background"
                    d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"
                  ></path>
                  <g fill="#FFF">
                    <path
                      className="primary"
                      d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"
                    ></path>
                  </g>
                </svg>
              </span>
              <p>SIGN IN</p>
            </div>
          </>
        ) : (
          <>
            <div className="user-authenticated-img">
              <img src={bell} alt="bell-img" className="bell-img"></img>
            </div>
            <div className="user-authenticated-img">
              <img
                src={video}
                alt="video-img"
                className="video-img"
                onClick={() => {
                  SetVisible(true);
                }}
              ></img>
            </div>
            <div className="user-authenticated-img">
              <img
                src={user.img}
                alt="user-img"
                className="user-Img"
                referrerPolicy="no-referrer"
                onClick={() => {
                  openOption();
                }}
              ></img>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
