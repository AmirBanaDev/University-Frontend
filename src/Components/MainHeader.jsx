import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import axios from "axios";
import { Form, Link, redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

function MainHeader() {
  const linkClasses = "text-gray-700 hover:text-blue-700";
  const liClasses = "mr-4 mt-1";
  const user = JSON.parse(sessionStorage.getItem("auth"));
  return (
    <>
      <header className="mb-8">
        <div className="text-white text-center">
          <img src="/CourseImg.jpg" alt="Banner" className="w-full h-16" />
        </div>
        <nav className=" py-2 flex justify-between items-start border-b-4 border-blue-400">
          {/* Navigation Links (Right Side) */}
          <ul className="flex">
            <li className={liClasses}>
              <Link to="/" className={linkClasses}>
                صفحه اصلی
              </Link>
            </li>
            <li className={liClasses}>
              <Link to={`/${user.id}/mycourses`} className={linkClasses}>
                دوره های من
              </Link>
            </li>
            {/*dropDownlist*/}
            <li className={liClasses}>
              <Menu as="div" className="relative inline-block">
                <div>
                  <MenuButton className={linkClasses}>مدیریت</MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <Link
                        to="/manager/newcourse"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        ساخت دوره جدید
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/manager"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        مشاهده ی دوره ها
                      </Link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            {/*dropDownlist*/}
            <li className={liClasses}>
              <Menu as="div" className="relative inline-block">
                <div>
                  <MenuButton className={linkClasses}>ادمین</MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <Link
                        to="/admin/adduser"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        ثبت نام کاربر
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/admin/users"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        مشاهده کاربران
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        to="/admin/departments"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        دپارتمان ها
                      </Link>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </ul>
          {/* User Profile (Left Side) */}
          <div className="ml-4">
            <Menu as="div" className="relative inline-block">
              <div>
                <MenuButton className={linkClasses}>
                  <img
                    src="\CourseImg.jpg"
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      پروفایل
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Form method="POST">
                      <button
                        type="submit"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        خروج
                      </button>
                    </Form>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;

export async function action(){
  try{
    const res = await axios.post(`${apiUrl}api/Account/logout`)
    sessionStorage.clear()
    return redirect("/login")
  }catch(err){
    console.log("err")
    console.log(err)
    return err;
  }
}