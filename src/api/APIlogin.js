import axios from "axios";

const loginapi= async(data)=>{
    const response= await axios({
        url:"https://borcelle-backend.onrender.com/auth/login",
        headers:{"Content-Type":"application/json"},
        method:"POST",
        data:JSON.stringify(data)
    })
    return response.data;
}
export default loginapi;
