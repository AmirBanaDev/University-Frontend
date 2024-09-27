import axios from "axios";
import { json, useLoaderData, Form, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function AddUser() {
    const {department, roles} = useLoaderData();
    console.log(roles)
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
        >
          <h2 className="text-2xl mb-4">افزودن کاربر</h2>
          <div className="mb-4">
            <label className="block text-gray-700">نام کاربری</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="userName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نام کامل</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="fullName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">شماره تلفن</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="phoneNumber"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نقش</label>
            <select className="w-full px-3 py-2 border rounded" name="role">
              {roles.data.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">شماره کارمندی</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="idCard"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">دپارتمان</label>
            <select className="w-full px-3 py-2 border rounded" name="department">
              {department.data.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">رمز</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              name="password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">جایگاه</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="position"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            افزودن
          </button>
        </Form>
      </div>
    </>
  );
}

export default AddUser;

export async function action({request, response}){
    const formData = await request.formData();
  const result = await createUser(formData);
  if (result.status !== 202) {
    console.log("fail");
    console.log("result data: " + result.data);
  } else {
    console.log("ok");
    window.alert("کاربر اضاف شد")
    return redirect("/admin/adduser");
  }
  return null;
}
async function createUser(formData){
    const data = Object.fromEntries(formData);
    try{
        const res = await axios.post(`${apiUrl}api/Account/signup`,{
            DisplayName: data.fullName,
            UserName : data.userName,
            PhoneNumber: data.phoneNumber,
            IdCard:data.idCard,
            Password:data.password,
            Position:data.position,
            DepartmentId:data.department,
            Role:data.role
        })
        return res
    }catch(err){
        console.log(err)
        return err
    }
}

export async function loader() {
  const user = JSON.parse(sessionStorage.getItem("auth"));
  if (user === null || user.role[0] !== "Admin") {
    return redirect("/");
  }
  try {
    const department = await getDepartment();
    const roles = await getRoles();
    return json({department, roles})
  } catch (err) {
    return err;
  }
}

async function getRoles() {
  try {
    const res = await axios.get(`${apiUrl}api/user/roles`);
    return res;
  } catch (err) {
    return err;
  }
}
async function getDepartment() {
  try {
    const res = await axios.get(`${apiUrl}api/Department`);
    return res;
  } catch (err) {
    return err;
  }
}
