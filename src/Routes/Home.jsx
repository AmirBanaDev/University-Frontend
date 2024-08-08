import { redirect } from "react-router-dom";

const login = false;

function Home() {
  return (
    <>
      <h1>This is Home Page</h1>
    </>
  );
}

export default Home;

export function loader() {
  return !login && redirect("/login");
}
