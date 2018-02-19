const axios = require('axios');

module.exports = {
  fetchStrava: url =>
    axios
      .get(url)
      .then(response => response.data)
      .catch(error => console.log(error))
};
