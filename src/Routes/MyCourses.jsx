import axios from "axios";
import { json, Link, useLoaderData } from "react-router-dom";
import MyCoursesRowSign from "../Components/MyCoursesRowSign";
import MyCourseRowFavo from "../Components/MyCourseRowFavo";

const apiUrl = "https://localhost:5000/";

function MyCourses() {
  const { userCourse } = useLoaderData();
  const data = userCourse.data;
  console.log(data);
  let colorS = "white";
  let colorF = "white";
  return (
    <>
      <div className="container mx-auto p-4">
        {/*signup parts */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">دوره های ثبت نام شده</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 width-1/4 text-center">
                  نام
                </th>
                <th className="py-2 px-4 border-b-2 width-1/4 text-center">
                  تاریخ شروع
                </th>
                <th className="py-2 px-4 border-b-2 width-1/4 text-center">
                  تعداد حضور
                </th>
                <th className="py-2 px-4 border-b-2 width-1/4 text-center">
                  چاپ مدرک
                </th>
              </tr>
            </thead>
            <tbody>
              {userCourse !== null &&
                data.signups.map((e) => (
                  <MyCoursesRowSign
                    key={e.id}
                    title={e.name}
                    date={e.startDate}
                    presence="2ساعت"
                    id={e.id}
                    color={
                      colorS === "white"
                        ? (colorS = "gray")
                        : (colorS = "white")
                    }
                  />
                ))}
            </tbody>
          </table>
        </section>

        {/*favorite part */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">دوره های مورد علاقه</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 border-gray-300 width-1/3 text-center">
                  نام
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 width-1/3 text-center">
                  تاریخ شروع
                </th>
                <th className="py-2 px-4 border-b-2 border-gray-300 width-1/3 text-center">
                  نوع دوره
                </th>
              </tr>
            </thead>
            <tbody>
              {userCourse !== null &&
                data.favorites.map((e) => (
                  <MyCourseRowFavo
                    key={e.id}
                    title={e.name}
                    date={e.startDate}
                    status="2ساعت"
                    id={e.id}
                    color={
                      colorF === "white"
                        ? (colorF = "gray")
                        : (colorF = "white")
                    }
                  />
                ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
export default MyCourses;

export async function loader() {
  try {
    const user = JSON.parse(sessionStorage.getItem("auth"));
    const userCourse = await axios.get(apiUrl + `api/User/favosign/${user.id}`);
    return json({ userCourse });
  } catch (err) {
    console.log(err);
    return err;
  }
  return null;
}
