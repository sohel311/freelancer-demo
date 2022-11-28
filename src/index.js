import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense fallback={"...loading"}>
          <App />
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
