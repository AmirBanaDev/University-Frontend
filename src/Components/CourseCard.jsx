import { Link } from "react-router-dom";

function CourseCard({ name,id,img, department, date, type }) {
  return (
    <>
      <div className="p-2">
        <div className="max-w-sm rounded overflow-hidden border-2 border-gray-300">
          <img className="w-full" src={img} alt="Course Image" />
          <div className="px-6 py-4">
            <div>
              <span className="font-semibold text-xl"><Link to={`/course/${id}`}>{name}</Link></span>
            </div>
          </div>
          <div className="px-2 pt-4 pb-2">
            <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
              حوزه: {department}
            </span>
            <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
              شروع از: {date}
            </span>
            <span className="inline-block text-sm font-semibold text-gray-700 mr-2 mb-2">
             نوع: {type}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseCard;
