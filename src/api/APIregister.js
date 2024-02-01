import axios from "axios";

const registerapi = async (data) => {
    const response = await axios({
        url: "http://localhost:80/auth/register",
        headers: { "Content-Type": "application/json" },
        method: "POST",
        data: JSON.stringify(data)
    })
    return response.data;
}
export default registerapi;