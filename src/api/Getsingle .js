import axios from "axios";

const Getproducts= async(id)=>{
    const response= await axios({
        url:`https://borcelle-backend.onrender.com/products/${id}`,
        headers:{"Content-Type":"application/json"},
        method:"GET",
    })
    return response.data;
}
export default Getproducts;
