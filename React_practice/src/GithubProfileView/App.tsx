import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Details from "./Details";
import { Homepage } from "./Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
  },
  {
    path: "users/:username",
    Component: Details,
  },
]);

export default function git() {
  return <RouterProvider router={router} />;
}