import axios from "axios";
import { Form, Link } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function ManagerCourseRow({ title, date, status, id, color }) {
  let trColor = "bg-white";
  if (color === "white") trColor = "bg-white";
  else if (color === "gray") trColor = "bg-gray-100";
  return (
    <>
      <tr className={trColor}>
        <td className="py-2 px-4 border-b width-1/4 text-center"><Link to={`course/${id}`} className="hover:text-blue-600">{title}</Link></td>
        <td className="py-2 px-4 border-b width-1/4 text-center">{date}</td>
        <td className="py-2 px-4 border-b width-1/4 text-center">
          {status === false ? "فعال" : "پایان یافته"}
        </td>
        <td className="py-2 px-4 border-b width-1/4 text-center inline-flex items-center">
          <Form method="POST" className="ml-2">
          <input type="hidden" value={id} name="id"/>
            <button
              type="submit"
              name="formBtn"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              value="fin"
            >
              پایان دوره
            </button>
          </Form>
          <Link
            to={"edit/" + id}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 ml-2"
          >
            ویرایش
          </Link>
          <Form method="POST">
            <input type="hidden" value={id} name="id"/>
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              name="formBtn"
              value="del"
            >
              حذف
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
}

export default ManagerCourseRow;

export async function action({ request, response }) {
  const formData = await request.formData();
  const intent = formData.get("formBtn");
  const id = formData.get("id")
  if (intent === "fin") {
    const result = await finishCourse(id);
    if (result.status !== 204) {
      console.log("false");
      console.log(result.data);
      return "err";
    }
    alert("دوره پایان یافت")
    return "fin";
  } else if (intent === "del") {
    const result = await deleteCourse(id);
    if (result.status !== 204) {
      console.log("false");
      console.log(result.data);
      return "err";
    } else {
      alert("دوره حذف شد")
      return "del";
    }
  }
}

async function finishCourse(id){
  try {
    const response = await axios.patch(apiUrl + `api/course/${id}/finish`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function deleteCourse(id){
  try{
    const response = await axios.delete(apiUrl + `api/course/${id}/delete`)
    return response
  } catch(err){
    console.log(err)
  }
}
