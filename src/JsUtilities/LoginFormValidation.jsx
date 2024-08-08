export function validateLoginForm(phone, pass, to2faForm) {
  const errors = {
    isValid: null,
    phone: [],
    password: [],
  };
  if (phone.length != 11) errors.phone.push("شماره باید 11 حرف باشد");
  if (phone.length != 0 && phone.match(/^[0-9]+$/) == null) errors.phone.push("فقط عدد وارد کنید");
  if (to2faForm == false && pass.length == 0)
    errors.password.push("رمز عبور نباید خالی باشد");
  if (errors.phone.length === 0 && errors.password.length === 0)
    errors.isValid = true;
  else errors.isValid = false;
  return errors;
}
export function validate2faForm(pass) {
  const errors = {
    isValid,
    pass: [],
  };
  if (pass != null && pass.match(/^[0-9]+$/) == null) errors.phone.push("فقط عدد وارد کنید");
  if (pass.length == 0) errors.password.push("رمز عبور نباید خالی باشد");
  if (errors.password.length == 0) errors.isValid = true;
  else errors.isValid = false;
  return errors;
}
