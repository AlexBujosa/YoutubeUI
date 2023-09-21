import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Watch } from "./components/Watch/Watch";
import { AuthContextProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { VideoContextProvider } from "./context/VideoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/main/main";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <VideoContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<App onComponentRender={<Main />} />}
            ></Route>
            <Route
              path="/results"
              element={<App onComponentRender={<Main />} />}
            ></Route>
            <Route
              path="watch/:linkId"
              element={<App onComponentRender={<Watch />} />}
            />
          </Routes>
        </BrowserRouter>
      </VideoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
