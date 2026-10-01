const { initializeApp, cert, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { serviceAccountPath } = require("./config");

// Read-only use: the backend only queries Firestore. The admin panel keeps
// writing directly from the browser with the Firebase Web SDK.
initializeApp({
  credential: serviceAccountPath ? cert(require(serviceAccountPath)) : applicationDefault(),
});

const db = getFirestore();

module.exports = { db };
