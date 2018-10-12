var fs = require('fs');
var _ = require('lodash');
var euCapitals = require('../../misc/eu-capitals.json');
var admin = require("firebase-admin");
var serviceAccount = require('../../../owm-a6-fb-credentials/owm-a6-fb-firebase-adminsdk-kdv5b-8c3ede325e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://owm-a6-fb.firebaseio.com'
});

const cities = euCapitals.reduce((acc, city) => {
  acc[city.id] = _.pick(city, ['name', 'country', 'iso2']);
  return acc;
}, {});

// To FB
// var db = admin.database();
// var ref = db.ref('cities');

// ref.set(cities, function (error) {
//   if (error) {
//     console.log("Data could not be saved." + error);
//   } else {
//     console.log("Data saved successfully.");
//   }
//   process.exit();
// });

// To project source for testing sample
// fs.writeFileSync('../../misc/cities-obj.json', JSON.stringify(cities));




