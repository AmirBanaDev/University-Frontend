function MainHeader() {
    const linkClasses = "text-gray-700 hover:text-blue-700"
    const liClasses = "mr-4 mt-1"
  return (
    <>
      <header>
      <div class="text-white text-center">
        <img src="/CourseImg.jpg" alt="Banner" class="w-full h-16"/>
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
            <li className={liClasses}>
              <a href="#" className={linkClasses}>
                مدیریت
              </a>
            </li>
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
