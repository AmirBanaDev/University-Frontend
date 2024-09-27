import axios from "axios";
import ShowUsersRow from "../Components/ShowUsersRow";
import { useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function ShowUsers() {
  let color = "white";
  const users = useLoaderData();
  console.log(users.data);
  return (
    <>
      <div className="container mx-auto p-4">
        {/*signup parts */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-4">مشاهده کاربران</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  نام کامل
                </th>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  نام کاربری
                </th>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  دپارتمان
                </th>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  شماره کارمندی
                </th>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  موقعیت
                </th>
                <th className="py-2 px-4 border-b-2 width-1/6 text-center">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {users.data !== null &&
                users.data.map((e) => (
                  <ShowUsersRow
                    key={e.id}
                    id={e.id}
                    name={e.displayName}
                    username={e.userName}
                    department={e.department}
                    idCard={e.idCard}
                    position={e.position}
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

export default ShowUsers;

export async function loader() {
  const users = await getUsers();
  return users;
}
async function getUsers() {
  try {
    const res = await axios.get(`${apiUrl}api/User/all`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
