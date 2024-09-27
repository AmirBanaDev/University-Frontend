import axios from "axios";
import { Form, Link } from "react-router-dom";

function ShowUsersRow({id, name, username, department, idCard, position, color}) {
  let trColor = "bg-white";
  if (color === "white") trColor = "bg-white";
  else if (color === "gray") trColor = "bg-gray-100";
  return (
    <>
      <tr className={`${trColor} border-b`}>
        <td className="py-2 px-4 width-1/6 text-center">
          <Link to={`/course/${id}`} className="hover:text-blue-600">
            {name}
          </Link>
        </td>
        <td className="py-2 px-4 width-1/6 text-center">{username}</td>
        <td className="py-2 px-4 width-1/6 text-center">{department}</td>
        <td className="py-2 px-4 width-1/6 text-center">{idCard}</td>
        <td className="py-2 px-4 width-1/6 text-center">{position}</td>
        <td className="py-2 px-4 width-1/6 text-center inline-flex items-center">
          <Link
            className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            to={`/admin/user/${id}/edit`}
          >
            ویرایش
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            حذف
          </button>
        </td>
      </tr>
    </>
  );
}

export default ShowUsersRow;
