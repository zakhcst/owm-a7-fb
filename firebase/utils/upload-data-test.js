var admin = require("firebase-admin");
// var serviceAccountFB = require('../../../owm-a7-fb-credentials/owm-a7-fb-42f2218b2354-fb-admin-sdk.json');
var serviceAccountGCP = require('../../../owm-a7-fb-credentials/owm-a7-fb-869b248d786e-appspot.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountGCP),
  databaseURL: 'https://owm-a7-fb.firebaseio.com'
});

const db = admin.database();
const ref = db.ref('invocations-log');
const refRoot = db.ref();

// ref.once("value", function(snapshot) {
//   console.log('Check downloaded');
//   console.log(snapshot.val());
// });

for(let i = 0; i < 100; i++) {
    const now = new Date();
    // const secondNow = parseInt(now.valueOf()/1000);
    const secondNow = parseInt(now.valueOf());
    const testData = { [secondNow] : ( now.toISOString() + ' ' + i ) };
    console.log(testData)
    ref.update(testData, function (error) {
        if (error) {
            console.log("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
        }
        process.exit();
    });
}
