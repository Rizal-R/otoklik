import axios from "axios";

export const GET_API = "https://limitless-forest-49003.herokuapp.com/posts"

export const fetchData = async () => {
    try {
        return await axios.get(`${GET_API}`);
    } catch (e) {
        return [];
    }
};