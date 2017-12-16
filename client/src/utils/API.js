import axios from "axios";

export default {
  searchArticles: function(searchData) {
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const APIKEY = "d9ad9f278672440d852d686e5705cd2a";
    return axios.get(`${BASEURL}?q=${searchData.searchTerm}&begin_date=${searchData.startYear || 2017}0101&end_date=${searchData.endYear || 2017}1231&sort=newest&api-key=${APIKEY}`);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/saved", articleData);
  },
  getArticles: function() {
    return axios.get("/api/saved");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  }

};
