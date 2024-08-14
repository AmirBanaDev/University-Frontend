import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader"
import MainFooter from "../Components/MainFooter";

function RootLayout() {
  return (
    <>
      <MainHeader/>
      <Outlet />
    </>
  );
}

export default SiteTemplate;
