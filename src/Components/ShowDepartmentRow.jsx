import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/"

function ShowDepartmentRow({id, name, color}) {
  let trColor = "bg-white";
  if (color === "white") trColor = "bg-white";
  else if (color === "gray") trColor = "bg-gray-100";
  return (
    <>
      <tr className={`${trColor} border-b`}>
        <td className="py-2 px-4 width-1/2 text-center">{name}</td>
        <td className="py-2 px-4 width-1/2 text-center inline-flex items-center">
          <Form method="POST">
            <input type="hidden" name="id" value={id}/>
            <button
              className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              حذف
            </button>
          </Form>
        </td>
      </tr>
    </>
  );
}

export default ShowDepartmentRow;

export async function action({request, response}){
    const formData = await request.formData()
    try{
        const res = await deleteDep(formData);
        return res;
    }catch(err){
        console.log(err)
        return err;
    }
}
async function deleteDep(formData){
    const data = Object.fromEntries(formData)
    try{
        const res = await axios.delete(`${apiUrl}api/Department/${data.id}/delete`)
        window.alert("دپارتمان حذف شد")
        return redirect("");
    }catch(err){
        console.log(err)
        return err;
    }
}
