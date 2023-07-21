import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/500.css";
import { configureStore } from "@reduxjs/toolkit";
import slice from "./state/Slice.js";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    user: slice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
