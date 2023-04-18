import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import college from './pages/college_page/college'
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
  ]);





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router} />
)
// ReactDOM.render(<App />,  document.getElementById('root'));


