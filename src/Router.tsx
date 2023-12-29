import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Services from "./pages/Services";
export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "project",
        children: [
          {
            index: true,
            element: <Project />,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Services />,
          },
        ],
      },
      {
        path: "contact",
        children: [
          {
            index: true,
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);
