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
import NewCourse, {loader as newCourseLoader, action as newCourseAction } from "./Routes/NewCourse.jsx";
import Manager, {loader as getCourseLoader} from "./Routes/Manager.jsx";
import {action as courseAction} from "./Components/ManagerCourseRow.jsx"
import ShowCourse, {loader as showCourseLoader, action as showCourseAction} from "./Routes/ShowCourse.jsx";
import MyCourses, {loader as mycoursesLoader} from "./Routes/MyCourses.jsx";

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
      {path:"manager", element:<Manager/>, loader: getCourseLoader, action: courseAction},
      {path:"manager/newcourse", element:<NewCourse/>, loader: newCourseLoader, action: newCourseAction},
      {path:`manager/course/:id`,element:<ShowCourse/>, loader:showCourseLoader, action: showCourseAction},
      {path: ':id/mycourses', element:<MyCourses/>, loader:mycoursesLoader}
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
