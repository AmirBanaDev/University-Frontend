import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Login, {action as loginAction} from "./Routes/Login.jsx";
import "./index.css";
import Home from "./Routes/Home.jsx";
import Login2faForm, {
  action as action2fa,
} from "./Routes/Login2faForm.jsx";
import LoginForm, { action as actionLogin } from "./Routes/LoginForm.jsx";
import Test from "./Routes/Test.jsx";
import RootLayout, {loader as rootLoader} from "./Layouts/RootLayout.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import NewCourse, {loader as newCourseLoader } from "./Routes/NewCourse.jsx";
import Manager from "./Routes/Manager.jsx";

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
    element:<RootLayout/>,
    children: [
      { index: true, element: <Home /> },
      {path:"manager", element:<Manager/>},
      {path:"manager/newcourse", element:<NewCourse/>, loader: newCourseLoader}
    ],
    loader: rootLoader
  },
  {
    path: "/admin",
    element: <AdminLayout/>,
    children:[

    ],
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
