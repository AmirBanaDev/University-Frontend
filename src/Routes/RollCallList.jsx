import axios from "axios";
import { Form, json, redirect, useLoaderData } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function RollCallList() {
  return (
    <>
      <div class="h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded shadow-md">
          <form class="grid grid-cols-2 gap-4" dir="rtl">

            <div class="flex items-center">
              <input type="checkbox" id="name1" class="ml-2" />
              <label for="name1" class="text-gray-700">
                رضا احمدی
              </label>
            </div>

            <div class="col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                تایید
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RollCallList;

export async function loader() {
  return null;
}
