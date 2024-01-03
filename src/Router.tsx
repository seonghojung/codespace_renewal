import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";
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
