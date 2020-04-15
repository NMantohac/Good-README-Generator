const axios = require("axios");
var config = {
  headers: {'Authorization': 'token 598c2de3b11f6959952eb2edab734c75c4851e82'}
}

const api = {
  getUser(username, cb) {
    axios.get(`https://api.github.com/users/${username}`, config)
      .then(response => {
        console.log(response.data);
        console.log(response.data.avatar_url);
        console.log(response.data.email);

        cb(response);

      })
  }
};

module.exports = api;
