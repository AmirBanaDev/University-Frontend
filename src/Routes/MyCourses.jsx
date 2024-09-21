import { Link, useLoaderData } from "react-router-dom";

function MyCourses() {
  return (
    <>
          <div class="container mx-auto p-4">
        {/*signup parts */}
        <section class="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 class="text-2xl font-bold mb-4">ثبت‌نام در دوره‌ها</h2>
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b-2 border-gray-300">نام</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">تاریخ شروع</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">تعداد حاضرین</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">چاپ جزئیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۷/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۲۰</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۲</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۸/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۵</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۳</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۹/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۳۰</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        {/*favorite part */}
        <section class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">ثبت‌نام در دوره‌ها</h2>
            <table class="min-w-full bg-white">
                <thead>
                    <tr>
                        <th class="py-2 px-4 border-b-2 border-gray-300">نام</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">تاریخ شروع</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">تعداد حاضرین</th>
                        <th class="py-2 px-4 border-b-2 border-gray-300">چاپ جزئیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۷/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۲۰</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۲</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۸/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۵</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="py-2 px-4 border-b border-gray-300">دوره ۳</td>
                        <td class="py-2 px-4 border-b border-gray-300">۱۴۰۳/۰۹/۰۱</td>
                        <td class="py-2 px-4 border-b border-gray-300">۳۰</td>
                        <td class="py-2 px-4 border-b border-gray-300">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                چاپ
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
    </>
  );
}
export default MyCourses;

export async function loader() {
  return null;
}
