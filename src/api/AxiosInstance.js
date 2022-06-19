import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/todos";

export default axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
