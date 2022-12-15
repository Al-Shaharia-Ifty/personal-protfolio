import { createBrowserRouter } from "react-router-dom";
import Blogs from "./Pages/Blogs";
import FirstProject from "./Pages/FirstProject";
import SecondProject from "./Pages/SecondProject";
import ThirdProject from "./Pages/ThirdProject";
import FourthProject from "./Pages/FourthProject";
import FifthProject from "./Pages/FifthProject";
import SixthProject from "./Pages/SixthProject";
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
  {
    path: "/first-project",
    element: <FirstProject />,
  },
  {
    path: "/seconde-project",
    element: <SecondProject />,
  },
  {
    path: "/third-project",
    element: <ThirdProject />,
  },
  {
    path: "/fourth-project",
    element: <FourthProject />,
  },
  {
    path: "/fifth-project",
    element: <FifthProject />,
  },
  {
    path: "/sixth-project",
    element: <SixthProject />,
  },
]);
