function CourseCard({ img, department, date, type }) {
  return (
    <>
      <div class="p-2">
        <div class="max-w-sm rounded overflow-hidden border-2 border-gray-300">
          <img class="w-full" src={img} alt="Course Image" />
          <div class="px-6 py-4">
            <div>
              <span class="font-semibold text-xl">دوره اخلاق استادی</span>
            </div>
          </div>
          <div class="px-2 pt-4 pb-2">
            <span class="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
              حوزه: {department}
            </span>
            <span class="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
              شروع از: {date}
            </span>
            <span class="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
              نیاز به ثبت نام: {type}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
