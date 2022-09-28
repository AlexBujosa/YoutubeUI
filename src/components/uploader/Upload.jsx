import React, { useEffect, useRef, useState } from "react";
import uploadpng from "./upload.png";
import uploadgif from "./upload.gif";
import miniature from "./loadminiature.png";
import { UserAuth } from "../../context/AuthContext";
import "./Upload.css";
export function UploaderVideo({ visible, SetVisible }) {
  const fileRef = useRef();
  const submitRef = useRef();
  const DragDropRef = useRef();
  const btnSelectRef = useRef();
  const DetailsRef = useRef();
  const containerRef = useRef();
  //Send input
  const titleRef = useRef();
  const descriptionRef = useRef();
  const miniatureRef = useRef();
  //Intermediary input
  const titleTextAreaRef = useRef();
  const descriptionTextAreaRef = useRef();
  // UserAuth
  const { user } = UserAuth();

  // State for transition Upload
  const [sendingVideo, SetSendingVideo] = useState(0);
  const [video, SetVideo] = useState(null);
  const arrItem = [uploadpng, uploadgif];
  const [count, SetCount] = useState(0);

  const SendVideo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("email", user.email);
    formData.append("name", user.name);
    formData.append("photo", user.img);
    fetch("http://localhost:4000/upload/file", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.sucess === true) {
          alert("Congratulations video finally uploaded");
        } else {
          alert("oh oh Something wrong succeded");
        }
      });
  };

  const resetFileV = () => {
    fileRef.current.value = "";
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    miniatureRef.current.value = "";
    titleTextAreaRef.current.value = "";
    descriptionTextAreaRef.current.value = "";
  };

  const CloseModal = () => {
    resetFileV();
    SetVisible(false);
    SetCount(0);
  };

  const finishUpload = () => {
    submitRef.current.click();
    resetFileV();
    SetVisible(false);
    SetCount(0);
  };

  const inputTitle = (e) => {
    titleRef.current.value = titleTextAreaRef.current.innerHTML;
  };

  const inputDescription = (e) => {
    descriptionRef.current.value = descriptionTextAreaRef.current.innerHTML;
  };

  const onChangeImgInputFile = () => {
    var reader = new FileReader();
    reader.onload = function(e) {
      SetVideo(e.target.result);
    };
    reader.readAsDataURL(miniatureRef.current.files[0]);
  };

  const onChangeInputFile = (e) => {
    e.preventDefault();
    SetSendingVideo(sendingVideo + 1);
    setTimeout(() => {
      SetSendingVideo(0);
      SetCount((oldCount) => {
        return oldCount + 1;
      });
    }, 5000);
  };

  const onDropTest = (e) => {
    e.preventDefault();
  };

  const onDragEnter = (e) => {
    e.target.style.background = "gray";
  };

  const onDragLeave = (e) => {
    e.target.style.background = "white";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (count === 0 && visible) {
      DragDropRef.current.style.display = "block";
      btnSelectRef.current.style.display = "block";
      DetailsRef.current.style.display = "none";
      containerRef.current.style.width = "70%";
    } else if (visible) {
      DragDropRef.current.style.display = "none";
      btnSelectRef.current.style.display = "none";
      DetailsRef.current.style.display = "block";
      containerRef.current.style.width = "95%";
    }
  });

  return (
    <>
      {visible ? (
        <>
          <div className="main-upload">
            <div className="upload-videos">
              <div className="header-upload-videos">
                <div>
                  {count === 0 ? (
                    <p>Subir Videos</p>
                  ) : (
                    <p>
                      {fileRef.current.value.substring(
                        12,
                        fileRef.current.value.length
                      )}
                    </p>
                  )}
                  <p
                    className="close-upload-modal"
                    onClick={() => {
                      CloseModal();
                    }}
                  >
                    X
                  </p>
                </div>
              </div>
              <div className="container-upload-videos" ref={containerRef}>
                <div className="DragDropItem" ref={DragDropRef}>
                  <div className="img-upload">
                    <div
                      className="circle-range-upload"
                      onDragEnter={(e) => {
                        onDragEnter(e);
                      }}
                      onDragLeave={(e) => {
                        onDragLeave(e);
                      }}
                      onDragOver={(e) => {
                        onDragOver(e);
                      }}
                      id="circle"
                    >
                      <img
                        src={arrItem[sendingVideo]}
                        alt="upload-image"
                        className="upload-image"
                        id="upload-image"
                        onDrop={(e) => {
                          onDropTest(e);
                        }}
                      ></img>

                      <form
                        onSubmit={(e) => {
                          SendVideo(e);
                        }}
                        id="foo"
                        encType="multipart/form-data"
                        className="form-sender"
                      >
                        <input
                          id="miniature"
                          type="file"
                          accept="image/png, image/gif, image/jpeg, image/jpg, image/*"
                          style={{ display: "none" }}
                          ref={miniatureRef}
                          name="miniature"
                          onChange={() => {
                            onChangeImgInputFile();
                          }}
                        ></input>
                        <input
                          type="file"
                          id="file"
                          accept="video/mp4,video/x-m4v,video/*"
                          ref={fileRef}
                          name="file"
                          onChange={(e) => {
                            onChangeInputFile(e);
                          }}
                        ></input>

                        <input
                          type="text"
                          id="title"
                          style={{ display: "none" }}
                          ref={titleRef}
                          name="title"
                        ></input>
                        <input
                          type="text"
                          id="description"
                          style={{ display: "none" }}
                          ref={descriptionRef}
                          name="description"
                        ></input>
                        <button
                          type="submit"
                          className="btnsubmit"
                          ref={submitRef}
                        >
                          Subir Video
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="div-select-files-button" ref={btnSelectRef}>
                  <label
                    htmlFor="file"
                    className="select-files-button"
                    onDrop={(e) => {
                      onDropTest(e);
                    }}
                    onDragOver={(e) => {
                      onDragOver(e);
                    }}
                  >
                    <div>Seleccionar Archivos</div>
                  </label>
                </div>
                <div className="Details" ref={DetailsRef}>
                  <div className="Details-body">
                    <p className="p-details">Detalles</p>
                    <div className="Details-title">
                      <p className="p-title">Titulo (Obligatorio) ?</p>
                      <div
                        id="title-textarea"
                        data-text="Titulo del video"
                        contentEditable="true"
                        ref={titleTextAreaRef}
                        onInput={(e) => {
                          inputTitle(e);
                        }}
                        name="titleTextArea"
                      ></div>
                    </div>
                    <div className="Details-Description">
                      <p className="p-title">Descripcion (Obligatorio) ?</p>
                      <div
                        id="description-textarea"
                        data-text="Descripcion del video"
                        contentEditable="true"
                        ref={descriptionTextAreaRef}
                        onInput={(e) => {
                          inputDescription(e);
                        }}
                        name="descriptionTextArea"
                      ></div>
                    </div>
                    <div className="Details-miniature">
                      <p className="p-title">Miniatura (Obligatorio) ?</p>
                      <div
                        className="miniature-container"
                        onClick={() => {
                          miniatureRef.current.click();
                        }}
                      >
                        {video === null ? (
                          <>
                            <img src={miniature}></img>
                          </>
                        ) : (
                          <>
                            <img src={video}></img>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="Details-footer">
                    <button
                      className="sendBTN"
                      onClick={() => {
                        finishUpload();
                      }}
                    >
                      Subir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
