const yelp = require('./yelp.js');

yelp.getRandomRestraunt('atlanta, ga')
    .then(res => {
        console.log(res);
    });
