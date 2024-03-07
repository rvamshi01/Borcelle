import axios from "axios";

const registerapi = async (data) => {
    const response = await axios({
        url: "https://borcelle-backend.onrender.com/register",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        data: JSON.stringify(data)
    })
    return response.data;
}
export default registerapi;
