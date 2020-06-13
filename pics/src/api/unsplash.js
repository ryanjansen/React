import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _rilk2_mbOmx6isHP38FSdOMSw-vZ-xiIfzgzjjDLSs",
  },
});
