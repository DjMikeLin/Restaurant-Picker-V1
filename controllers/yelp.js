const apiKey = require('../yelpAoiCred.js').APIKey;
const yelp = require('yelp-fusion');

const getRandomRestraunt = (location) => {
    const searchRequest = {
      //term:'Saigon Basil',
      'limit': 1,
      'offset': Math.floor(Math.random() * 400) + 1,
      location: location
    };

    const client = yelp.client(apiKey);

    return client.search(searchRequest).then(response => {
      const result = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(result, null, 4);
      console.log(prettyJson);
      return prettyJson;
    }).catch(e => {
      console.log(e);
    });

}

module.exports = {
    getRandomRestraunt
}
