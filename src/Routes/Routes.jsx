import Main from "../Layout/Main";
import {
    createBrowserRouter,
  } from "react-router-dom";
import HomePage from "../Pages/Landing Page/HomePage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <HomePage/>
        },
      ]
    },
  ]);