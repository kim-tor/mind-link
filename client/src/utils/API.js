import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getPosts: function(query) {
    return axios.get("/api/posts", { params: { q: query } });
  },
  savePost: function(thoughts) {
    console.log("api request")
    return axios.post("/api/posts", thoughts)
  }
};
