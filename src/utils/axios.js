import axios from "axios";

//contacts
const instance1 = axios.create({
  // baseURL: "http://localhost:9002/api",
  baseURL: "https://node-deploy-sacci-1.onrender.com",
});
//startups

const instance2 = axios.create({
  baseURL: "http://localhost:5000/api",
});

export { instance1, instance2 };
