import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Home } from "./Home";
import { Country } from "./Country";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/country/:name",
    element: <Country />,
  },
]);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
