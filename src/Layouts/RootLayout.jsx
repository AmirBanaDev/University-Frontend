import { Outlet, redirect, useLoaderData } from "react-router-dom";
import MainFooter from "../Components/MainFooter";
import MainHeader from "../Components/MainHeader";

function RootLayout() {
  const loaderData = useLoaderData();
  return (
    <>
    <div className="flex flex-col h-screen">
      <MainHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
      <MainFooter />
      </div>
    </>
  );
}

export default RootLayout;

export function loader() {
  const user = sessionStorage.getItem("auth");
  if (!user) {
    return redirect("/login");
  }
  return JSON.parse(user);
}
