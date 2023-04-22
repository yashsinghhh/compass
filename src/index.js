import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import college from './pages/college_page/college'
import Sign_in_page from "./pages/sign_in_page/Sign_in_page";
import Sign_up_page from "./pages/sign_up_page/Sign_up_page";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import  './index.css'


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
        path: "wgpt3",
        element: <college />,
      },
      {
        path: "signin",
        element: <Sign_in_page />,
      },
      {
        path: "signup",
        element: <Sign_up_page />,
      },
  ]);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router} />
)
// ReactDOM.render(<App />,  document.getElementById('root'));


