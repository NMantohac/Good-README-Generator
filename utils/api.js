const axios = require("axios");
var config = {
  headers: {'Authorization': 'token 1fa67471d3a12c8eaedac265cf1cf16acd6f379f'}
}

const api = {
  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`, config)
      .then(response => {
        console.log(response.data);
        console.log(response.data.avatar_url);
        console.log(response.data.email);

      })
  }
};

module.exports = api;
