import axios from "axios";
import { Form, Link } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function MyCoursesRowSign({ title, date, presence, id, color }) {
  let trColor = "bg-white";
  if (color === "white") trColor = "bg-white";
  else if (color === "gray") trColor = "bg-gray-100";
  return (
    <>
      <tr className={`${trColor} border-b`}>
        <td className="py-2 px-4 width-1/4 text-center">
          <Link to={`/course/${id}`} className="hover:text-blue-600">
            {title}
          </Link>
        </td>
        <td className="py-2 px-4 width-1/4 text-center">{date}</td>
        <td className="py-2 px-4 width-1/4 text-center">{presence}</td>
        <td className="py-2 px-4 width-1/4 text-center inline-flex items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            چاپ
          </button>
        </td>
      </tr>
    </>
  );
}

export default MyCoursesRowSign;
