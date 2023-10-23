import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Child from "./Child";
import Child2 from "./Child2";

export const router = createBrowserRouter([
  {
    path: "/",
    id: "root",
    children: [
      { index: true, element: <App /> },
      {
        path: "child",
        children: [
          {
            index: true,
            element: <Child />,
          },
        ],
      },
    ],
  },
]);
