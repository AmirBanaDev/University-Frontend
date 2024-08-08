import { Form, useActionData, redirect } from "react-router-dom";
import { validateLoginForm } from "../JsUtilities/LoginFormValidation";

function LoginForm({ form2fa }) {
  const actionData = useActionData();
  console.log(actionData);
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96">
      <h1 className="text-2xl font-bold mb-6">ورود</h1>
      <Form method="post">
        <input
          type="text"
          name="phone"
          placeholder="شماره موبایل"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="رمز عبور"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
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
        {!actionData?.isValid && 
          <ul>
            {actionData?.phone.map(e => <li key = {e} className = "text-red-600 font-semibold">{e}</li>)}
            {actionData?.password.map(e => <li key = {e} className = "text-red-600 font-semibold">{e}</li>)}
          </ul>
        }
      </Form>
    </div>
  );
}
//{isValid: false, phone: Array(1), password: Array(0)}
export default LoginForm;

export async function action({ request }) {
  const formData = await request.formData();
  const intent = formData.get("formBtn");
  if (intent === "code") {
    const errors = validateLoginForm(
      formData.get("phone"),
      formData.get("password"),
      true
    );
    if (errors.isValid === false) {
      return errors;
    }
    await getCodeFromServer(formData)
    return redirect("/login/mobilecode");
  } 
  else if (intent === "enter") {
    const errors = validateLoginForm(
      formData.get("phone"),
      formData.get("password"),
      false
    );
    if (errors.isValid === false) {
      return errors;
    }
    await loginFromServer(formData)
  }
}

async function getCodeFromServer(formData){
  
}
async function loginFromServer(formData){
}