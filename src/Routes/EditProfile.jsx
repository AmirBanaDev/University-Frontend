import axios from "axios";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { Form, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/"

function EditProfile() {
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl mb-4">ویرایش پروفایل</h2>
          <div className="mb-4">
            <label className="block text-gray-700">ایمیل</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">تصویر پروفایل </label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded"
              name="profilePic"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">تاریخ تولد</label>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              className="w-full px-3 py-2 border rounded"
              name="birthDate"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            ویرایش
          </button>
        </Form>
      </div>
    </>
  );
}

export default EditProfile;

export async function action({ request, response }) {
  const formData = await request.formData();
  const res = await sendData(formData)
  return res;
}
async function sendData(formData){
    const data = Object.fromEntries(formData)
    const user = JSON.parse(sessionStorage.getItem('auth'))
    console.log(data)
    try{
        const res = await axios.put(`${apiUrl}api/User/edit/${user.id}`,{
            birthdate: data.birthDate,
            profilePicture: data.profilePic,
            email: data.email
        },{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        console.log(res)
        return redirect("/profile");
    } catch(err){
        console.log(err)
        return err;
    }
}
