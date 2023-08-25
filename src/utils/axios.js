import axios from "axios";



//contacts
const instance1 = axios.create({
  baseURL: "http://localhost:9002/api",
});
//startups

const instance2 = axios.create({
  baseURL: "http://localhost:5000/api",
});

export { instance1, instance2 };
