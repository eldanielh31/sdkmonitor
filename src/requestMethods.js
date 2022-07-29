import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

axios.defaults.timeout = 30000
axios.defaults.timeoutErrorMessage = 'error : timeout'
// axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});