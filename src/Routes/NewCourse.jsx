import { Form } from "react-router-dom";
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import TimePicker from 'react-time-picker';

function NewCourse() {
  return (
    <>
      <div className="flex justify-center items-center mb-5">
        <Form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl mb-4">دوره جدید</h2>
          <div className="mb-4">
            <label className="block text-gray-700">اسم</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نوع</label>
            <select className="w-full px-3 py-2 border rounded">
              <option value="general">عمومی</option>
              <option value="support">پشتیبانی</option>
              <option value="feedback">بازخورد</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">آپلود تصویر</label>
            <input type="file" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نام استاد</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">نیاز به ثبت نام</label>
            <select className="w-full px-3 py-2 border rounded">
              <option value="general">دارد</option>
              <option value="support">ندارد</option>
            </select>
          </div>
          <div className="mb-4">
          <label className="block text-gray-700">تاریخ شروع</label>
          <DatePicker
            calendar={persian}
            locale={persian_fa}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
          <div className="mb-4">
            <label className="block text-gray-700">برنامه زمانی</label>
            <textarea className="w-full px-3 py-2 border rounded"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">مکان</label>
            <input type="text" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
          <label className="block text-gray-700">تعداد جلسات</label>
          <input type="number" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">ساعت</label>
          <input type="number" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">دقیقه</label>
          <input type="number" className="w-full px-3 py-2 border rounded" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700"> توضیحات</label>
            <textarea className="w-full px-3 py-2 border rounded"></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </Form>
      </div>
    </>
  );
}

export default NewCourse;
