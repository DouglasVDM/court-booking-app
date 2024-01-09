import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
const domain = import.meta.env.DOMAIN;
const clientId = import.meta.env.CLIEN_ID;

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
