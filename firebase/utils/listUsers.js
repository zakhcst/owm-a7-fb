// var serviceAccount = require('../../../fb_credentials/owm-a7-fb/owm-a7-fb-firebase-adminsdk-06hnz-89de3dda7e.json'); // ?? obsolete
var serviceAccount = require('../../../owm-a7-fb-credentials/owm-a7-fb-42f2218b2354-fb-admin-sdk.json');
// var serviceAccount = require('../../../owm-a7-fb-credentials/owm-a7-fb-869b248d786e-appspot.json'); // 'Credential implementation provided to initializeApp() via the "credential" property has insufficient permission to access the requested resource.
var admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://owm-a7-fb.firebaseio.com'
});


function listAllUsers(nextPageToken) {
    // List batch of users, 1000 at a time.
    return admin.auth().listUsers(1000, nextPageToken)
      .then(function(listUsersResult) {
        console.log('users', listUsersResult);
        listUsersResult.users.forEach(function(userRecord) {
          console.log('user', userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch(function(error) {
        console.log('Error listing users:', error);
      });
  }
// Start listing users from the beginning, 1000 at a time.
// listAllUsers();


function authUser() {
    const user = admin.auth().getUser('101399546220922236662').then(user => {
    console.log(user);
  }).catch(err => console.error(err));
}
// authUser();


