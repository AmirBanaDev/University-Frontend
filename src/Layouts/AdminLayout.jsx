import { Outlet, redirect, useLoaderData } from "react-router-dom";
import MainFooter from "../Components/MainFooter";
import AdminHeader from "../Components/AdminHeader";

function AdminLayout() {
    const loaderData = useLoaderData();
    console.log(loaderData);
  return (
    <>
      <AdminHeader />
        <Outlet/>
      <MainFooter />
    </>
  );
}

export default AdminLayout;

export function loader() {
    return true
    const user = sessionStorage.getItem("auth");
    if (!user) {
      return redirect("/login");
    }
  }