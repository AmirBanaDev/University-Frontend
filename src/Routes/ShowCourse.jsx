import axios from "axios";
import { useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function ShowCourse() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
        <div className="container mx-auto p-4">
          <section className="bg-white shadow-md rounded-lg p-4 mb-6 flex">
            <div className="w-2/3">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <p className="mb-2">نام دوره: {data.name}</p>
                  <p className="mb-2">دپارتمان: {data.deparment}</p>
                  <p className="mb-2">مدرس: {data.teacher}</p>
                </div>
                <div>
                <p className="mb-2">تاریخ شروع: {data.startDate}</p>
                  <p className="mb-2">برنامه: {data.schedule}</p>
                  <p className="mb-2">مکان: {data.location}</p>
                </div>
                <div>
                <p className="mb-2">نوع: {data.type}</p>
                  <p className="mb-2">وضعیت: {data.isFinished === false ? "فعال" : "پایان یافته"}</p>
                  <p className="mb-2">تعداد جلسات: {data.numberOfSessions}</p>
                </div>
              </div>
              <p className="mb-4">
                {data.description}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                ثبت نام
              </button>
            </div>
            <div className="w-1/3">
              <img
                src={data.banner}
                alt={data.banner}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>
          <section className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-2xl font-semibold mb-4">مدیریت</h2>
            <div className="flex justify-center space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-5">حضور و غیاب</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-5">اضاف کردن محتوای جدید</button>
            </div>
        </section>
        </div>
    </>
  );
}

export default ShowCourse;

export async function loader({ params }) {
  console.log("param id: " + params.id);
  try {
    const response = await axios.get(apiUrl + `api/course/${params.id}`);
    return response;
  } catch (err) {
    console.log("false");
    return err;
  }
}
