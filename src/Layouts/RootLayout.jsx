import { Outlet, redirect, useLoaderData } from "react-router-dom";
import MainFooter from "../Components/MainFooter";
import MainHeader from "../Components/MainHeader";

function RootLayout() {
    const loaderData = useLoaderData();
    console.log(loaderData);
  return (
    <>
      <MainHeader />
        <Outlet/>
      <MainFooter />
    </>
  );
}

export default RootLayout;

export function loader() {
    return true
    const user = sessionStorage.getItem("auth");
    if (!user) {
      return redirect("/login");
    }
  }