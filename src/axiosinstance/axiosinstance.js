import axios from "axios";
// to fixed based url
const Axios = axios.create({
  baseURL: `https://fakestoreapi.com/`,
});
export default Axios;
