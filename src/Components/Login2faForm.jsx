function Login2faForm({ formLogin }) {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg text-center w-96">
      <h1 className="text-2xl font-bold mb-6">ورود</h1>
      <form>
        <input
          type="password"
          placeholder="رمز یکبار مصرف"
          required
          pattern="\d{6}"
          title="6 digits accepted"
          maxLength="6"
          minLength="6"
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
      </form>
    </div>
  );
}

export default Login2faForm;
