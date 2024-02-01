import axios from "axios"

const Getproducts= async(id)=>{
    const response= await axios({
        url:`http://localhost:80/products/${id}`,
        headers:{"Content-Type":"application/json"},
        method:"GET",
    })
    return response.data;
}
export default Getproducts;