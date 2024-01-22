import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./Auth0ProviderWithNavigate.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <App />
        </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
