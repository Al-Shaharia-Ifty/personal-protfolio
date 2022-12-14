import { createBrowserRouter } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import Home from "./Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
]);
