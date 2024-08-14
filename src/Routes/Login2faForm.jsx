import { useState } from "react";
import { Form } from "react-router-dom";
import { validate2faForm } from "../JsUtilities/LoginFormValidation";

function Login2faForm({ formLogin }) {
  const [formErrors, setFormErrors] = useState("");
  const onSubmitHadler = (event) => {
    console.log();
    setFormErrors(null);
    event.preventDefault();
    const formData = event.target;
    const errors = validate2faForm(formData.mobileCode);
    if (errors.isValid == false) {
      setFormErrors({ pass });
    }
  };
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-6">ورود</h1>
        <Form method="POST">
          <input
            type="password"
            name="mobileCode"
            placeholder="رمز یکبار مصرف"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
          >
            ورود به سایت
          </button>
          <button
            type="button"
            className="w-full p-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={formLogin}
          >
            بازگشت
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login2faForm;

export async function action({ request, response }) {
  const formData = await request.formData();
  const formInput = formData.get("mobileCode");
  const errors = validate2faForm(formInput);
  if (errors.isValid == false) {
    setFormErrors({ pass });
    return pass;
  }
}
