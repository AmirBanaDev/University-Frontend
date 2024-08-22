import CourseCard from "../Components/CourseCard";

function CourseSection({ children, nameNumber, title }) {
  return (
    <section className="px-10 pb-4 border-1 border-gray-300">
      <div className="p-2 border-2 border-gray-300 rounded">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-6 pr-2">{title}</h2>
          {nameNumber != 1 && (
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
                همه
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
                آزاد
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded">
                ثبت نامی
              </button>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
