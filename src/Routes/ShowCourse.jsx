import axios from "axios";
import { useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function ShowCourse() {
  const { data } = useLoaderData();
  console.log(data);
  return (
    <>
        <div class="container mx-auto p-4">
          <section class="bg-white shadow-md rounded-lg p-4 mb-6 flex">
            <div class="w-2/3">
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div>
                    <p class="mb-2">نام دوره: علوم کامپیوتر</p>
                  <p class="mb-2">دپارتمان: علوم کامپیوتر</p>
                  <p class="mb-2">مدرس: استاد مثال</p>
                </div>
                <div>
                <p class="mb-2">تاریخ شروع: 403/5/12</p>
                  <p class="mb-2">برنامه: دوشنبه‌ها و چهارشنبه‌ها</p>
                  <p class="mb-2">مکان: دانشگاه تهران</p>
                </div>
                <div>
                <p class="mb-2">نوع: هم اندیشی</p>
                  <p class="mb-2">وضعیت: فعال</p>
                  <p class="mb-2">تعداد جلسات: 10</p>
                </div>
              </div>
              <p class="mb-4">
                توضیحات دوره به زبان فارسی. این دوره شامل موضوعات مختلفی است که
                به شما کمک می‌کند تا مهارت‌های جدیدی را یاد بگیرید.
              </p>
              <button class="bg-blue-500 text-white px-4 py-2 rounded">
                ثبت نام
              </button>
            </div>
            <div class="w-1/3">
              <img
                src="course-image.jpg"
                alt="Course Image"
                class="rounded-lg shadow-md"
              />
            </div>
          </section>
          <section class="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 class="text-2xl font-semibold mb-4">مدیریت</h2>
            <div class="flex justify-center space-x-4">
                <button class="bg-green-500 text-white px-4 py-2 rounded ml-5">حضور و غیاب</button>
                <button class="bg-yellow-500 text-white px-4 py-2 rounded ml-5">اضاف کردن محتوای جدید</button>
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
