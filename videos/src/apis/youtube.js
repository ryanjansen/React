import axios from "axios";

const KEY = "AIzaSyBajP6TDGmqOm0I5nqZz2RiPYjnxSHG7ko";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
