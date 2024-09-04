import { Link } from "react-router-dom";

function ManagerCourseRow({title, date, status, id, color}) {
    let trColor="bg-white";
    if(color==="white")
        trColor="bg-white"
    else if(color==="gray")
        trColor="bg-gray-100"
  return (
    <>
      <tr className={trColor}>
        <td className="py-2 px-4 border-b width-1/4 text-center">{title}</td>
        <td className="py-2 px-4 border-b width-1/4 text-center">{date}</td>
        <td className="py-2 px-4 border-b width-1/4 text-center">{status}</td>
        <td className="py-2 px-4 border-b width-1/4 text-center">
          <Link to={"edit/"+id} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 ml-2">
            ویرایش
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            حذف
          </button>
        </td>
      </tr>
    </>
  );
}

export default ManagerCourseRow