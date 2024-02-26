import axios from "axios";

const loginapi= async(data)=>{
    const response= await axios({
        url:"http://localhost:80/auth/login",
        headers:{"Content-Type":"application/json"},
        method:"POST",
        data:JSON.stringify(data)
    })
    return response.data;
}
export default loginapi;
