import CourseCard from "../Components/CourseCard";

function CourseSection({children}) {
  return (
    <section class="px-10 pb-4 border-1 border-gray-300">
      <div class="p-2 border-2 border-gray-300 rounded">
        <div class="mb-6">
          <h2 class="text-2xl font-semibold mb-6 pr-2">همه دوره ها</h2>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
              ثبت‌نام
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
              جزئیات
            </button>
            <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
              اشتراک‌گذاری
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;