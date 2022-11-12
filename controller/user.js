// const { getUserUtility } = require("../utitlity/user");

function createUser(req, res) {
  res.send("ok");
}

function getUser(req, res) {
  req.send("ok");
}

function getAllUser(req, res) {
  req.send("ok");
}

function updateUser(req, res) {
  req.send("ok");
}

function deleteUser(req, res) {
  req.send("ok");
}

module.export = { createUser, getUser, getAllUser, updateUser, deleteUser };
