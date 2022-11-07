const db = require("../model/db");

async function getUser(id = null) {
  try {
    const users = await db.Users.findAll({ where: id ? { id } : {} });
    return users;
  } catch (error) {
    //handle error
  }
}

module.exports = { getUser };
