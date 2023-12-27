import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MainRouter } from "./router/MainRouter";
import { TodoContextProvider } from "./context/TodoContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoContextProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </TodoContextProvider>
    <ToastContainer />
  </React.StrictMode>
);
