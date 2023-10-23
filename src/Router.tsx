import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Child from "./Child";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
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
