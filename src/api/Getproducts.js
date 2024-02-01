import axios from "axios"

const Getproducts= async()=>{
    const response= await axios({
        url:"http://localhost:80/products",
        headers:{"Content-Type":"application/json"},
        method:"GET",
    })
    return response.data;
}
export default Getproducts;