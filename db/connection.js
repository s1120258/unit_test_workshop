const mongoose = require("mongoose");
require("dotenv").config();

const userName = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const clusterInfo = process.env.MONGODB_CLUSTER_INFO;
console.log(userName);

let mongoDB = `mongodb+srv://${userName}:${password}@${clusterInfo}`;

////EXAMPLE////
// Make sure to create .env file and use an environment variable

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose.connection;
