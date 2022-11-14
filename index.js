const express = require("express");
let db = require("./model/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const userroutes = require("./controller/user");
require("dotenv").config();
const app = express();
const ENV = process.env;
const port = ENV?.port || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));

db.sequelize
  .authenticate()
  .then((error) => {
    if (!error) {
      console.error(
        `express server connected to "${ENV?.SERVERHOST || "NA"}" database "${
          ENV?.DBNAME || "NA"
        }"`
      );
    } else {
      console.error(
        `express server failed  to connected to "${
          ENV?.SERVERHOST || "NA"
        }" database "${ENV?.DBNAME || "NA"}"`
      );
    }

    db.sequelize.sync();
    // {force: true}
    // {alter: true}
  })
  .catch((err) => {
    console.error(
      `ERROR - Unable to connect to the database: "${ENV?.DB_NAME}"`,
      err
    );
  });

app.get("/", (req, res) => {
  res.send("Welcome to Kiran's express server");
});

app.use("/api/v1/user", userroutes);

app.listen(port, (err) => {
  if (!err) {
    console.log(`server running at port ${ENV.PORT}`);
  }
});
