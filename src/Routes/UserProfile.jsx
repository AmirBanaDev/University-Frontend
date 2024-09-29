import axios from "axios";
import { useLoaderData, Link } from "react-router-dom";
import FixFilePath from "../JsUtilities/FixFilePath";

const apiUrl = "https:localhost:5000/";

function UserProfile() {
    const data = useLoaderData().data;
    console.log(data)
  return (
    <>
            <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
            {/*left side */}
            <div className="w-full md:w-3/12 md:mx-2">
                <div className="bg-white p-3 border-t-4 border-blue-400">
                    <div className="image overflow-hidden mb-2">
                        <img className="h-auto w-full mx-auto rounded-full"
                             src={data.profilePicture ? FixFilePath(data.profilePicture) : "https://via.placeholder.com/150"}
                             alt="Profile Picture"/>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                        <Link to="edit">ویرایش پروفایل</Link>
                    </button>
                </div>
            </div>
            {/*right side */}
            <div className="w-full md:w-9/12 mx-2 h-64">
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span className="tracking-wide">اطلاعات شخصی</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">نام</div>
                                <div className="px-4 py-2">{data.displayName}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">ایمیل</div>
                                <div className="px-4 py-2">{data.email ? data.email : "خالی"}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">سمت</div>
                                <div className="px-4 py-2">{data.position ? data.position : "خالی"}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">دپارتمان</div>
                                <div className="px-4 py-2">{data.department ? data.department : "خالی"}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">تاریخ تولد</div>
                                <div className="px-4 py-2">{data.birthDate ? data.birthDate : "خالی"}</div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>

    </>
  );
}

export default UserProfile;

export async function loader(){
    const user = JSON.parse(sessionStorage.getItem("auth"))
    try{
        const res = await axios.get(`${apiUrl}api/User/${user.id}`)
        return res;
    } catch(err){
        console.log(err)
        return err
    }
    return null;
}