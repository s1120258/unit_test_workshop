const mongoose = require("mongoose");
// require("dotenv").config();

mongoose.set("strictQuery", true);

// const userName = process.env.MONGODB_USERNAME.toString();
// const password = process.env.MONGODB_PASSWORD.toString();
// const clusterInfo = process.env.MONGODB_CLUSTER_INFO.toString();

// const dbURI = `mongodb+srv://${userName}:${password}@${clusterInfo}`;
const dbURI =
  "mongodb+srv://toolit:toolit2024@cluster0.qfir1a6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
