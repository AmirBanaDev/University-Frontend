import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm, { action as actionLogin } from "../Components/LoginForm";
import Login2faForm, { action as action2fa } from "../Components/Login2faForm.jsx";

function Login() {
  const [show2fa, setShow2fa] = useState(false);
  const handle2faOpen = () => setShow2fa(true);
  const handle2faClose = () => setShow2fa(false);
  if(show2fa) action = action2fa
  else action = actionLogin
  return (
    <>
      <div className="absolute inset-0 background  bg-gray-100"></div>
      {!show2fa ? (
        <LoginForm form2fa={handle2faOpen} />
      ) : (
        <Login2faForm formLogin={handle2faClose} />
      )}
    </>
  );
}

export default Login;

export let action;