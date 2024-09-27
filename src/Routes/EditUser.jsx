import { select } from "@material-tailwind/react";
import axios from "axios";
import { useLoaderData, Form, json, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function EditUser() {
  const { department, roles, user } = useLoaderData();
  console.log(user.data);
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
        >
          <h2 className="text-2xl mb-4">ویرایش کاربر</h2>
          <input type="hidden" name="id" defaultValue={user.data.id}/>
          <div className="mb-4">
            <label className="block text-gray-700">نام کاربری</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="userName"
              defaultValue={user.data.userName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نام کامل</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="fullName"
              defaultValue={user.data.displayName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">شماره تلفن</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="phoneNumber"
              defaultValue={user.data.phoneNumber}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">شماره کارمندی</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="idCard"
              defaultValue={user.data.idCard}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">دپارتمان</label>
            <select
              className="w-full px-3 py-2 border rounded"
              name="department"
            >
              {department.data &&
                department.data.map((e) =>
                  e.name == user.data.department ? (
                    <option key={e.id} value={e.id} selected>
                      {e.name}
                    </option>
                  ) : (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  )
                )}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">جایگاه</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="position"
              defaultValue={user.data.position}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            تغییر
          </button>
        </Form>
      </div>
    </>
  );
}

export default EditUser;

export async function action({request, response}){
    const formData = await request.formData();
  const result = await editUser(formData);
  if (result.status !== 201) {
    console.log("fail");
    console.log("result data: " + result.data);
  } else {
    console.log("ok");
    window.alert("کاربر تغییر یافت")
    return redirect("/admin/users");
  }
  return null;
}
async function editUser(formData){
    const data = Object.fromEntries(formData);
    console.log(data)
    try{
        const res = await axios.put(`${apiUrl}api/User/update/${data.id}`,{
            DisplayName: data.fullName,
            UserName: data.userName,
            PhoneNumber: data.phoneNumber,
            IdCard: data.idCard,
            Position: data.position,
            DepartmentId: data.department
        });
        return res;
    }catch(err){
        console.log(err)
        return err;
    }
}

export async function loader({ params }) {
  const user = JSON.parse(sessionStorage.getItem("auth"));
  if (user === null || user.role[0] !== "Admin") {
    return redirect("/");
  }
  try {
    const department = await getDepartment();
    const roles = await getRoles();
    const user = await getUser(params.id);
    return json({ department, roles, user });
  } catch (err) {
    return err;
  }
}
async function getUser(id) {
  try {
    const res = await axios.get(`${apiUrl}api/User/${id}`);
    return res;
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
