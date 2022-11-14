const db = require("../model/db");
const User = db.Users;

async function createUserUtility(userDetails) {
  try {
    const users = await User.create(userDetails);
    if (users) {
      return { success: true, statusCode: 200, message: "user registered" };
    } else {
      return {
        success: true,
        statusCode: 500,
        message: "failed to register user",
      };
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: "Internal server error",
      error: error.message,
    };
  }
}

async function getUserUtility(id = null) {
  try {
    const users = await db.Users.findAll({ where: id ? { id } : {} });
    if (users.length == 0) {
      return { success: false, statusCode: 404, message: "user not found" };
    } else {
      return {
        success: true,
        statusCode: 200,
        message: "user found",
        user: id ? user[0] : user,
      };
    }
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: "Internal server error",
      error: error.message,
    };
  }
}

module.exports = { createUserUtility, getUserUtility };
