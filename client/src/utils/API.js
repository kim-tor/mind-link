import axios from "axios";


export default {
  getPosts: function(query) {
    return axios.get("/api/posts", { params: { q: query } });
  },
  savePost: function(thoughts) {
    console.log("api request")
    return axios.post("/api/posts", thoughts)
  }
};
