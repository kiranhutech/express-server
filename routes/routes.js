const { Router } = require("express");
// const { authorize } = require("../controller/auth");
const {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controller/user");

const router = Router();

router.post("/user", (req, res) => {
  createUser;
});

// router.get("/user", (req, res) => {
//   getUser(req, res);
// });
// router.get("/user", getAllUser);
// router.put("/user", updateUser);
// router.delete("/user", deleteUser);

module.exports = router;
