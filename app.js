const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = require("./routes");
require("./models/db");

// app.set("view engine", "ejs");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", router);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/*", (req, res, next) => {
  res.status(404).json({ error: "Page not found" });
});

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
