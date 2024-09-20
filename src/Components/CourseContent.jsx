function CourseContent({ title, createdAt, description, file }) {
  return (
    <>
      <div className="p-2 border-2 border-gray-300 rounded mb-4">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-2">{createdAt}</p>
        {description !== null && (
          <p className="text-gray-800 mb-4">{description}</p>
        )}
        <div>
          {file !== null && (
            <a href={file} className="text-blue-500 hover:underline" alt={file}>
              دانلود فایل درس
            </a>
          )}
        </div>
      </div>
    </>
  );
}

export default CourseContent;
