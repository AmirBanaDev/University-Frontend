import axios from "axios";
import { Form, Link } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function MyCourseRowFavo({ title, date, status, id, color }) {
  let trColor = "bg-white";
  if (color === "white") trColor = "bg-white";
  else if (color === "gray") trColor = "bg-gray-100";
  return (
    <>
      <tr className={`${trColor} border-b`}>
        <td className="py-2 px-4 width-1/3 text-center">
          <Link to={`/course/${id}`} className="hover:text-blue-600">
            {title}
          </Link>
        </td>
        <td className="py-2 px-4 width-1/3 text-center">{date}</td>
        <td className="py-2 px-4 width-1/3 text-center">{status}</td>
      </tr>
    </>
  );
}

export default MyCourseRowFavo;
