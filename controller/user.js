let express = require("express");
let route = express.Router();
let db = require("../model/db");
const { getUser } = require("../utitlity/user");

//get all users
route.get("/", async (req, res) => {
  try {
    const user = await getUser();
    console.log(user);
    res.status(200).json({
      success: true,
      message: "users found",
      userCount: 2,
      users: [
        {
          id: req?.params?.id,
          name: "Archana",
          email: "archana@hutechsolutions.com",
        },
        {
          id: req?.params?.id,
          name: "Dipshikha",
          email: "dipshkha@hutechsolutions.com",
        },
      ],
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
});

//get user by id
route.get("/:id", (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "user found",
      users: {
        id: req?.params?.id,
        name: "Archana",
        email: "archana@hutechsolutions.com",
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "internal server error" });
  }
});

module.exports = route;
