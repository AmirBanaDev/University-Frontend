import { Outlet, redirect, useLoaderData } from "react-router-dom";
import CourseCard from "../Components/CourseCard";
import CourseSection from "../Components/CourseSections";
import axios from "axios";
import FixFilePath from "../JsUtilities/FixFilePath";

const apiUrl = "https://localhost:5000/";
function Home() {
  const data = useLoaderData();
  const courses = [];
  for (let i = data.data.length - 1; i >= 0; i--) {
    courses.push(data.data[i]);
  }
  console.log(courses);
  let i = 0;
  let i1 = 0;
  let i2 = 0;
  return (
    <>
      <CourseSection title="همه دوره ها" id="0">
        {courses.map((e) => {
          if (i < 4) {
            i++;
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
        })}
      </CourseSection>
      <CourseSection title="ثبت نامی" id="1">
        {courses.map((e) => {
          if (i1 < 4 && e.needSignup == true) {
            i1++;
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
        })}
      </CourseSection>
      <CourseSection title="آزاد" id="2">
        {courses.map((e) => {
          if (i2 < 4 && e.needSignup == false) {
            i2++;
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
        })}
      </CourseSection>
    </>
  );
}

export default Home;

export async function loader() {
  try {
    const res = await axios.get(`${apiUrl}api/Course`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
