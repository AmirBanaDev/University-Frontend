import { Outlet, redirect, useLoaderData } from "react-router-dom";
import CourseCard from "../Components/CourseCard";


function Home() {
  const loaderData = useLoaderData()
  console.log(loaderData)
  return (
    <>
      <h1>This is Home Page</h1>
      <CourseCard/>
    </>
  );
}

export default Home;

export function loader() {
  const user = sessionStorage.getItem("auth")
  if(!user){
    return redirect("/login")
  }
  else{
    return user
  }

}
