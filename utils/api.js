// Require Axios Dependency and token.config from token.js
const axios = require("axios");
const token = require("./token")

// GitHub API call using Axios to retrieve data and pass it in a callback
const api = {
  getUser(username, cb) {
    axios.get(`https://api.github.com/users/${username}`, token.config)
      .then(response => {
        console.log(response.data);
    
        cb(response);

      })
  }
};

module.exports = api;
