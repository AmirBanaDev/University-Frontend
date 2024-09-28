import axios from "axios";
import { Form, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function AddDepartment() {
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          method="POST"
        >
          <h2 className="text-2xl mb-4">افزودن دپارتمان</h2>
          <div className="mb-4">
            <label className="block text-gray-700">نام</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              name="name"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            افزودن
          </button>
        </Form>
      </div>
    </>
  );
}

export default AddDepartment;

export async function action({request, response}) {
    const formData = await request.formData();
  const result = await createDepartment(formData);
  if (result.status !== 201) {
    console.log("fail");
    console.log(result.data);
  } else {
    console.log("ok");
    window.alert("دپارتمان اضاف شد");
    return redirect("/admin/departments");
  }
  return null;
}
async function createDepartment(formData){
    const data = Object.fromEntries(formData);
    try {
        const res = await axios.post(`${apiUrl}api/Department/create`, {
          name:data.name
        });
        return res;
      } catch (err) {
        console.log(err);
        return err;
      }
}