import { Form, redirect, useLoaderData } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axios from "axios";

const apiUrl = "https://localhost:5000/";

function NewCourse() {
  const loaderData = useLoaderData();
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl mb-4">دوره جدید</h2>
          <div className="mb-4">
            <label className="block text-gray-700">اسم</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نوع</label>
            <select className="w-full px-3 py-2 border rounded" name="type">
              {loaderData.data.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">آپلود تصویر</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded"
              name="banner"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نام استاد</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="teacher"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نیاز به ثبت نام</label>
            <select
              className="w-full px-3 py-2 border rounded"
              name="needSignUp"
            >
              <option value="true">دارد</option>
              <option value="false">ندارد</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">تاریخ شروع</label>
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              className="w-full px-3 py-2 border rounded"
              name="date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">برنامه زمانی</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              name="schedule"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">مکان</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">تعداد جلسات</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              name="sessions"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ساعت</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              name="hour"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">دقیقه</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              name="minute"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> توضیحات</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              name="description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            ساختن
          </button>
        </Form>
      </div>
    </>
  );
}

export default NewCourse;

export async function loader() {
  const user = JSON.parse(sessionStorage.getItem("auth"));
  if (user === null || user.role[0] !== "Manager") {
    return redirect("/");
  }
  const response = await getCourseTypes();
  return response;
}

async function getCourseTypes() {
  try {
    const response = await axios.get(apiUrl + "api/coursetype");
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function action({ request, response }) {
  const formData = await request.formData();
  const result = await createCourse(formData);
  if (result.status !== 200) {
    console.log("fail");
    console.log("result data: " + result.data);
  } else {
    console.log("ok");
    return redirect("/manager");
  }
  return null;
}
async function createCourse(formData) {
  let data = Object.fromEntries(formData);
  const department = JSON.parse(sessionStorage.getItem("auth")).department;
  console.log(data)
  try {
    const response = await axios.post(
      apiUrl + "api/course/create",
      {
        Name: data.name,
        TypeId: data.type,
        DepartmentId: department,
        Banner: data.banner,
        Description: data.description,
        Teacher: data.teacher,
        NeedSignup: data.needSignUp,
        StartDate: data.date,
        Schedule: data.schedule,
        NumberOfSessions: data.sessions,
        Location: data.location,
        SessionHour: data.hour,
        SessionMinute: data.minute
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("1")
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}
