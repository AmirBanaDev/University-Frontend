import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function RollCallSessions() {
  const data = useLoaderData();
  const sessions = data.data.numberOfSessions;
  let nums = Array();
  for (let i = 0; i < sessions; i++) {
    let x = i+1;
    nums[i] = (
      <Link
        key={`${x}`}
        to={`${x}`}
        className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
      >
        جلسه{i + 1}
      </Link>
    );
  }
  console.log(sessions);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4 mx-20">
        {nums.map((e) => e)}
      </div>
    </>
  );
}

export default RollCallSessions;

export async function loader({ params }) {
  try {
    const res = await axios.get(apiUrl + `api/course/${params.id}`);
    return res;
  } catch (err) {
    console.log(err);
    return err;
  }
}
