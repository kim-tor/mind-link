import axios from "axios";


export default {
  getPosts: function (query) {
    return axios.get("/api/post", { params: { q: query } });
  },
  savePost: function (thoughts) {
    console.log("api request")
    return axios.post("/api/post", thoughts)
  },

  getStories: function (query) {


    var options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: { q: query, lang: 'en', sort_by: 'relevancy', page: '1', media: 'True' },
      headers: {
        'x-rapidapi-key': 'f85bdb7a3cmshd763b26c1883817p1c2c6fjsn1327acd79efb',
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
      }
    };

    return axios.request(options).then(function (response) {
      console.log(response.data);
      return response.data;
    }).catch(function (error) {
      console.error(error);
    });
  },

getQuotes: function () {

    var options = {
      method: 'GET',
      url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
      params: { token: 'ipworld.info' },
      headers: {
        'x-rapidapi-key': 'f120dbf26amsh764f0f19f295a5cp1c31d6jsne28603558386',
        'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
      }
    };

    return axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data.text;
      }).catch(function (error) {
        console.error(error);
      });
  }
};