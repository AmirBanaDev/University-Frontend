import { Link } from "react-router-dom";

function CourseSection({ children, title,id }) {
  let link;
  if(id==0) link = "/courses/all"
  if(id==1) link = "/courses/signs"
  if(id==2) link = "/courses/free" 
  return (
    <section className="px-10 pb-4 border-1 border-gray-300">
      <div className="p-2 border-2 border-gray-300 rounded">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-6 pr-2"><Link to={link}>{title}</Link></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
}

export default CourseSection;
