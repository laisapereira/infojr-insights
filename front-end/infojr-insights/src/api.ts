import axios from "axios";

const api = axios.create ({
    baseURL: "https://api-infoinsights.herokuapp.com/api/insights&page=1"
});

export default api