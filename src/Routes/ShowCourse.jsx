import axios from "axios";
import { useLoaderData, Form, json } from "react-router-dom";
import FixFilePath from "../JsUtilities/FixFilePath";
import CourseContent from "../Components/CourseContent";

const apiUrl = "https://localhost:5000/";
function ShowCourse() {
  const { courseData, userCourse } = useLoaderData();
  const data = courseData.data;
  const userCourseData = userCourse.data;
  const isFavorite = favorite(userCourseData, data.id);
  console.log(isFavorite)
  const isSigned = signup(userCourseData, data.id);
  console.log(userCourseData);
  const img = FixFilePath(data.banner);
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
                <p className="mb-2">
                  وضعیت: {data.isFinished === false ? "فعال" : "پایان یافته"}
                </p>
                <p className="mb-2">تعداد جلسات: {data.numberOfSessions}</p>
              </div>
            </div>
            <p className="mb-4">{data.description}</p>
            {data.needSignup === true ? (
              isSigned[0] !== true ? (
                <Form className="mb-2" method="PATCH">
                  <input type="hidden" name="id" value="signup" />
                  <input type="hidden" name="courseId" value={data.id} />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    type="submit"
                    name="signup"
                  >
                    ثبت نام
                  </button>
                </Form>
              ) : (
                <button
                  className="bg-gray-100 border-2 border-blue-500 text-back px-4 py-2 rounded mb-2"
                  type="submit"
                  name="signup"
                  disabled
                >
                  ثبت نام شده
                </button>
              )
            ) : (
              <p className="text-blue-700 mb-2"> بدون نیاز به ثبت نام</p>
            )}
            {isFavorite[0] !== true ? (
              <Form className="mb-2" method="PATCH">
                <input type="hidden" name="id" value="favorite" />
                <input type="hidden" name="courseId" value={data.id} />
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  type="submit"
                  name="signup"
                >
                  علاقه مندی
                </button>
              </Form>
            ) : (
              <Form className="mb-2" method="PATCH">
                <input type="hidden" name="id" value="removeFav" />
                <input type="hidden" name="courseId" value={data.id} />
                <button
                  className="bg-gray-100 border-red-500 border-2 text-black px-4 py-2 rounded"
                  type="submit"
                  name="signup"
                >
                  حذف علاقه
                </button>
              </Form>
            )}
          </div>
          <div className="w-1/3">
            <img src={img} className="rounded-lg shadow-md" />
          </div>
        </section>
        <section className="bg-white shadow-md rounded-lg p-4 mb-6">
          <h2 className="text-2xl font-semibold mb-4">مدیریت</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded ml-5">
              حضور و غیاب
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-5">
              اضاف کردن محتوای جدید
            </button>
          </div>
        </section>
        <section className="bg-white shadow-md rounded-lg p-4 mb-6">
          {data.contentDtos.map((e) => (
            <CourseContent
              key={e.id}
              title={e.title}
              createdAt={e.createdAt}
              description={e.description}
              file={FixFilePath(e.files)}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default ShowCourse;

function favorite(userData, courseId) {
  return userData.favorites.map((item) => item.id === courseId);
}
function signup(userData, courseId) {
  return userData.signups.map((item) => item.id === courseId);
}
export async function loader({ params }) {
  try {
    const user = JSON.parse(sessionStorage.getItem("auth"));
    const courseData = await axios.get(apiUrl + `api/course/${params.id}`);
    const userCourse = await axios.get(apiUrl + `api/User/favosign/${user.id}`);
    return json({ courseData, userCourse });
  } catch (err) {
    console.log("false");
    return err;
  }
}

export async function action({ request, response }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const user = JSON.parse(sessionStorage.getItem("auth"));
  const intent = formData.get("id");
  if (intent === "favorite") {
    const result = await favoriteAction(data, user);
    return result;
  } else if (intent === "signup") {
    const result = await signupAction(data, user);
    return result;
  } else if(intent == "removeFav"){
    const result = await removeFavoriteAction(data, user);
    return result;
  }
}
async function removeFavoriteAction(data, user){
  try{
    const res = await axios.patch(
      apiUrl+`api/User/${user.id}/favo/${data.courseId}/remove`
    );
    return res;
  } catch(err){
    return err;
  }
}
async function favoriteAction(data, user) {
  try {

    const res = await axios.patch(
      apiUrl + `api/User/${user.id}/favo/${data.courseId}`
    );
    return res;
  } catch (err) {
    return err;
  }
}
async function signupAction(data, user) {
  try {

    const res = await axios.patch(
      apiUrl + `api/User/${user.id}/sign/${data.courseId}`
    );
    return res;
  } catch (err) {
    return err;
  }
}
