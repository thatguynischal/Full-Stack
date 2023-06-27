import axios from "axios";
export default axios.create({
    baseURL: "https://chal.mandalaprint.com/api",
    headers: {
        "Content-Type": "application/json"
    }
})
