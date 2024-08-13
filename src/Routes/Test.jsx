import CourseCard from "../Components/CourseCard";
import CourseSection from "../Components/CourseSections";
function Test() {
  return (
    <>
      <CourseSection>
        <CourseCard
          img="/CourseImg.jpg"
          department="کامپیوتر و شهرسازی"
          date="1403/8/9"
          type="دارد"
        />
        <CourseCard
          img="/CourseImg.jpg"
          department="کامپیوتر و شهرسازی"
          date="1403/8/9"
          type="دارد"
        />
        <CourseCard
          img="/CourseImg.jpg"
          department="کامپیوتر و شهرسازی"
          date="1403/8/9"
          type="دارد"
        />
      </CourseSection>
    </>
  );
}

export default Test;
