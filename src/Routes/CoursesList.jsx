import { Outlet, redirect, useLoaderData, json } from "react-router-dom";
import axios from "axios";
import FixFilePath from "../JsUtilities/FixFilePath";
import CourseCard from "../Components/CourseCard";

const apiUrl = "https://localhost:5000/";
function CoursesList() {
  const { data, type } = useLoaderData();
  const courses = [];
  for (let i = data.length - 1; i >= 0; i--) {
    courses.push(data[i]);
  }
  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4">
          {courses.map((e) => {
            if (type === "all") {
              return (
                <CourseCard
                  key={e.id}
                  id={e.id}
                  img={FixFilePath(e.banner)}
                  name={e.name}
                  department={e.deparment}
                  date={e.startDate}
                  type={e.type}
                />
              );
            } else if (type === "signs") {
              if (e.needSignup == true) {
                return (
                  <CourseCard
                    key={e.id}
                    id={e.id}
                    img={FixFilePath(e.banner)}
                    name={e.name}
                    department={e.deparment}
                    date={e.startDate}
                    type={e.type}
                  />
                );
              }
            } else if (type === "free") {
              if (e.needSignup == false) {
                return (
                  <CourseCard
                    key={e.id}
                    id={e.id}
                    img={FixFilePath(e.banner)}
                    name={e.name}
                    department={e.deparment}
                    date={e.startDate}
                    type={e.type}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    </>
  );
}

export default CoursesList;

export async function loader({ params }) {
  try {
    const res = await axios.get(`${apiUrl}api/Course`);
    const type = params.type;
    const data = res.data;
    return json({ data, type });
  } catch (err) {
    console.log(err);
    return err;
  }
}
