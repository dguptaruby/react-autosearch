import axios from "axios";

export const fetchData = (value) => {
    return axios.get(`http://localhost:3035/?searchQuery=${value}`);
}

  