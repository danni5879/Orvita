const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.getAuthUsers = functions.https.onCall(async () => {

  const result = await admin.auth().listUsers(1000);

  return result.users.map(user => ({
    uid: user.uid,
    email: user.email || "",
    disabled: user.disabled,
    creationTime: user.metadata.creationTime,
    lastSignInTime: user.metadata.lastSignInTime
  }));
});