import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./Home";

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
            element: <div>project</div>,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <div>services</div>,
          },
        ],
      },
      {
        path: "contact",
        children: [
          {
            index: true,
            element: <div>contact</div>,
          },
        ],
      },
    ],
  },
]);
