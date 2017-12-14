import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  postArticle: function(articleID) {
    return axios.post("/api/saved/" + articleID);
  },
  // Deletes the book with the given id
  deleteArticle: function(articleID) {
    return axios.delete("/api/articles/" + articleID);
  },

};
