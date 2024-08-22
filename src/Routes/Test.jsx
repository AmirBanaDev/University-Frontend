import CourseCard from "../Components/CourseCard";
import CourseSection from "../Components/CourseSections";
import MainFooter from "../Components/MainFooter";
import MainHeader from "../Components/MainHeader"

function Test() {
  return (
    <>
    <MainHeader/>
    <CourseSection title="همه دوره ها" nameNumber="3">
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
    </CourseSection>
    <CourseSection title="پیش رو" nameNumber="1">
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
    </CourseSection>
    <CourseSection title="پین شده ها" nameNumber="1">
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
      <CourseCard img="./CourseImg.jpg" department="ریاضی" date="1403/12/2" type="آزاد"/>
    </CourseSection>
    <MainFooter/>
    </>
  );
}

export default Test;
