import { Form, useActionData, redirect } from "react-router-dom";
import { validateLoginForm } from "../JsUtilities/LoginFormValidation";
import axios from "axios";

const apiUrl = "https://localhost:5000/";

function LoginForm({ form2fa }) {
  const actionData = useActionData();
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-6">ورود</h1>
        <Form method="post">
          <input
            type="text"
            name="PhoneNumber"
            placeholder="شماره موبایل"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            defaultValue="0961555"
          />
          <input
            type="password"
            name="Password"
            placeholder="رمز عبور"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            defaultValue="adminadmin"
          />
          <button
            type="submit"
            name="formBtn"
            value="enter"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
          >
            ورود به سایت
          </button>
          <button
            type="submit"
            name="formBtn"
            value="code"
            className="w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={form2fa}
          >
            ورود با رمز یکبار مصرف
          </button>
          {!actionData?.isValid && (
            <ul>
              {actionData?.phone.map((e) => (
                <li key={e} className="text-red-600 font-semibold">
                  {e}
                </li>
              ))}
              {actionData?.password.map((e) => (
                <li key={e} className="text-red-600 font-semibold">
                  {e}
                </li>
              ))}
            </ul>
          )}
        </Form>
      </div>
    </div>
  );
}
//{isValid: false, phone: Array(1), password: Array(0)}
export default LoginForm;

export async function action({ request, response }) {
  const formData = await request.formData();
  const intent = formData.get("formBtn");
  if (intent === "code") {
    const errors = validateLoginForm(
      formData.get("PhoneNumber"),
      formData.get("Password"),
      true
    );
    if (errors.isValid === false) {
      return errors;
    }
    getCodeFromServer(formData);
    return redirect("/login/mobilecode");
  } else if (intent === "enter") {
    const errors = validateLoginForm(
      formData.get("PhoneNumber"),
      formData.get("Password"),
      false
    );
    if (errors.isValid === false) {
      return errors;
    }
    const result = await loginFromServer(formData);
    if (result.status !== 200) {
      console.log("false");
      console.log(result.data);
    } else {
      console.log("ok");
      sessionStorage.setItem("auth", JSON.stringify(result.data));
      return redirect("/");
    }
    return null;
  }
}
async function getCodeFromServer(formData) {}
async function loginFromServer(formData) {
  const loginData = Object.fromEntries(formData);
  try {
    const response = await axios.post(apiUrl + "api/Account/login", {
      PhoneNumber: loginData.PhoneNumber,
      Password: loginData.Password,
    });
    return response;
  } catch (err) {
    console.log(err);
  }
}
