import { Form, redirect, useLoaderData } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import axios from "axios";

const apiUrl = "https://localhost:5000/";

function AddContent() {
  const loaderData = useLoaderData();
  const courseId = loaderData;
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
          encType="multipart/form-data"
        >
          <h2 className="text-2xl mb-4">افزودن محتوای جدید</h2>
          <input type="hidden" name="id" value={courseId} />
          <div className="mb-4">
            <label className="block text-gray-700">عنوان</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">آپلود فایل</label>
            <input
              type="file"
              className="w-full px-3 py-2 border rounded"
              name="file"
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

export default AddContent;

export async function action({ request, response }) {
  const formData = await request.formData();
  const result = await sendData(formData);
  if (result.status !== 200) {
    console.log("fail");
    console.log("result data: " + result.data);
  } else {
    window.alert("محتوا اضاف شد")
    console.log("ok");
  }
  return null;
}
async function sendData(formData) {
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const res = await axios.post(
      `${apiUrl}api/CourseContent/${data.id}/content/create`,
      {
        Title: data.title,
        Description: data.description,
        File: data.file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function loader({ params }) {
  return params.id;
}
