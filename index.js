const functions = require('firebase-functions');
const app = require('./src/server');

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);

