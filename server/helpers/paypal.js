// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "",
//   client_id: "",
//   client_secret: "",
// });

// module.exports = paypal;


const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // Use 'sandbox' for testing and 'live' for production
  client_id: "AbCdEfGhIjKlMnOpQrStUvWxYz1234567890", // Dummy client ID
  client_secret: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t", // Dummy client secret
});

module.exports = paypal;
