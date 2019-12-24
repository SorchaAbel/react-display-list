import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 0b56a69cc1890752bb4c5d3db5af9ff15388bea2b58436a9dc1ea86ecefb39d0"
  }
});
