import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

function MainHeader() {
  const linkClasses = "text-gray-700 hover:text-blue-700";
  const liClasses = "mr-4 mt-1";
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
              <a href="#" className={linkClasses}>
                صفحه اصلی
              </a>
            </li>
            <li className={liClasses}>
              <a href="#" className={linkClasses}>
                دوره های من
              </a>
            </li>
            <li className={liClasses}>
              <a href="#" className={linkClasses}>
                مدرک ها
              </a>
            </li>
            {/*dropDownlist*/}
            <li className={liClasses}>
              <Menu as="div" className="relative inline-block">
                <div>
                  <MenuButton className={linkClasses}>
                    مدیریت
                  </MenuButton>
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
              <a href="#" className={linkClasses}>
                ادمین
              </a>
            </li>
          </ul>
          {/* User Profile (Left Side) */}
          <div className="ml-4">
            <img
              src="\CourseImg.jpg"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
