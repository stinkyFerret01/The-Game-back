const mongoose = require("mongoose");

//-- PublicMessage
//-- message destinĂ© au chat publique
const PublicMessage = mongoose.model("PublicMessage", {
  publisherId: String,
  publisherName: String,
  publisherAvatar: String,
  publisherMessage: String,
  publisherAccessLevel: Number,
  publicationDate: Object,
});

module.exports = PublicMessage;
