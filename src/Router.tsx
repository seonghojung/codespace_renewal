import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Child from "./Child";
import { Layout } from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "about",
        children: [
          {
            index: true,
            element: <Child />,
          },
        ],
      },
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
        path: "recruit",
        children: [
          {
            index: true,
            element: <div>recruit</div>,
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
