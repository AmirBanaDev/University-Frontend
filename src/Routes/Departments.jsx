import axios from "axios";
import ShowDepartmentRow from "../Components/ShowDepartmentRow";
import { useLoaderData, json, Link } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function Departments() {
  const { department } = useLoaderData();
  console.log(department.data);
  let color = "white";
  return (
    <>
      <div className="container mx-auto p-4">
        {/*signup parts */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mb-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <Link to="add">افزودن</Link>
          </button>
          <h2 className="text-2xl font-bold mb-4">دپارتمان ها</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 width-1/2 text-center">
                  نام
                </th>
                <th className="py-2 px-4 border-b-2 width-1/2 text-center">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {department.data !== null &&
                department.data.map((e) => (
                  <ShowDepartmentRow
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    color={
                      color === "white" ? (color = "gray") : (color = "white")
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

export default Departments;

export async function loader() {
  const department = await getDepartments();
  return json({ department });
}
async function getDepartments() {
  try {
    const res = await axios.get(`${apiUrl}api/Department`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
