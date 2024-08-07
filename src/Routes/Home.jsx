import { redirect } from "react-router-dom";

const login = false;

function Home() {
  return (
    <>
      <div></div>
    </>
  );
}

export default Home;

export function loader() {
  return !login && redirect("/login");
}
