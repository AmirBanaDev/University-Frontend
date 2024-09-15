import axios from "axios";
import ManagerCourseRow from "../Components/ManagerCourseRow";
import { Link, useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function Manager() {
  const loaderData = useLoaderData();
  console.log(loaderData)
  let color = "white";
  return (
    <>
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6 mb-2">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          دوره ها
        </h1>
        <Link
          to="newCourse"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-6"
        >
          افزودن
        </Link>
        <table className="min-w-full bg-white mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b width-1/4 text-center">
                عنوان
              </th>
              <th className="py-2 px-4 border-b width-1/4 text-center">
                تاریخ شروع
              </th>
              <th className="py-2 px-4 border-b width-1/4 text-center">
                وضعیت
              </th>
              <th className="py-2 px-4 border-b width-1/4 text-center">
                عملیات ها
              </th>
            </tr>
          </thead>
          <tbody>
            {loaderData !== null && loaderData.data.map((e) => (
              <ManagerCourseRow
                key={e.id}
                title={e.name}
                date={e.startDate}
                status={e.isFinished}
                id={e.id}
                color={color==="white" ? color = "gray" : color = "white" }
              />
            ))}
            {/*<ManagerCourseRow title="آیتم 1" date="1403/2/12" status="فعال" id="1" color="white"/>
              <ManagerCourseRow title="آیتم 1" date="1403/2/12" status="فعال" id="1" color="gray"/>*/}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Manager;

export async function loader() {
  const user = JSON.parse(sessionStorage.getItem("auth"));
  if (user === null || user.role[0] !== "Manager") {
    return redirect("/");
  }
  const department = user.department;
  const response = await getDepartmentCourses(department);
  if(response.status !== 200) return null
  return response;
}
async function getDepartmentCourses(department) {
  try {
    const response = await axios.get(
      apiUrl + "api/Course/department/"+department
    );
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}
