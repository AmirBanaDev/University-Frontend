import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Login, {action as loginAction} from "./Routes/Login.jsx";
import "./index.css";
import Home, { loader as homeLoader } from "./Routes/Home.jsx";
import Login2faForm, {
  action as action2fa,
} from "./Routes/Login2faForm.jsx";
import LoginForm, { action as actionLogin } from "./Routes/LoginForm.jsx";
import Test from "./Routes/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/login",
    children: [
      { index: true, element: <LoginForm />, action: actionLogin },
      { path: "mobilecode", element: <Login2faForm />, action: action2fa },
    ],
  },
  {
    path: "/",
    children: [
      { index: true, element: <Home />, loader: homeLoader },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
