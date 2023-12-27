import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import Home from "./pages/home/Home";
import Test from "./test";
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
            element: <Test />,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <div>services짱짱써비스</div>,
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
