const express = require("express");
const app = express();
let db = require("./model/db");
const userroutes = require("./controller/user");
require("dotenv").config();
const port = process?.env?.port || 3001;

db.sequelize
  .authenticate()
  .then((error) => {
    if (!error) {
      console.error(
        `express server connected to "${
          process?.env?.SERVERHOST || "NA"
        }" database "${process?.env?.DBNAME || "NA"}"`
      );
    } else {
      console.error(
        `express server failed  to connected to "${
          process?.env?.SERVERHOST || "NA"
        }" database "${process?.env?.DBNAME || "NA"}"`
      );
    }

    db.sequelize.sync();
    // {force: true}
    // {alter: true}
  })
  .catch((err) => {
    console.error(
      `ERROR - Unable to connect to the database: "${process.env.DB_NAME}"`,
      err
    );
  });

app.get("/", (req, res) => {
  res.send("Welcome to Kiran's express server");
});

app.use("/user", userroutes);

app.listen(port, (err) => {
  if (!err) {
    console.log("server running at port 3001");
  }
});
