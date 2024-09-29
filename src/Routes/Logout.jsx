import axios from "axios";
import { redirect } from "react-router-dom";

const apiUrl = "https://localhost:5000/";

export default function Logout()
{
    return <><p>this is a test</p></>
}
export async function loader(){
   // const user = JSON.parse(sessionStorage.getItem("auth"));
    try{
        const res = await axios.post(`${apiUrl}api/Account/logout`);
        console.log(res)
        return res;
    } catch(err){
        console.log(err)
        return err
    }
}