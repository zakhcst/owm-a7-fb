const functions = require('firebase-functions');
const test = require('./helloWorld');
const owm = require('./owm');
const cities = require('./cities');
const getip = require('./get-ip');

exports.test = functions.https.onRequest(test.helloWorld);
exports.getip = functions.https.onRequest(getip.getip);

exports.owmOnWrite = functions.database.ref('/owm/{cityId}/updated').onWrite(owm.onWrite);
exports.citiesOnWriteUpdate = functions.database.ref('/cities/{cityId}/u').onWrite(cities.onWriteUpdate);
exports.citiesOnWriteRead   = functions.database.ref('/cities/{cityId}/r').onWrite(cities.onWriteRead);
