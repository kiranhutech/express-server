const { Router } = require("express");
// const { authorize } = require("../controller/auth");
const { createUserUtility, getUserUtility } = require("../utitlity/user");
const { authorizeUser } = require("../utitlity/auth");

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    console.log("user signup..................");
    let response = await createUserUtility(req.body);
    res.status(response.statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      success: true,
      statusCode: 500,
      message: "failed to register user",
    });
  }
});

router.post("/login", (req, res) => {
  //email && pasw
  // const userExist = utility.loginUtility(email, password);
  if (userExist?.id) {
    // const tooken= createJWTToken({id:userExist?.id,email:userExist?.email})
    //return response
  } else {
    //401
  }
});

router.post("/add-user", authorizeUser, async (req, res) => {
  try {
    console.log("add-user..................");
    let response = await createUserUtility(req.body);
    res.status(response.statusCode).json(response);
  } catch (error) {
    res.status(500).json({
      success: true,
      statusCode: 500,
      message: "failed to register user",
    });
  }
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
});

router.get("/", (req, res) => {
  //
});
router.put("/:id", (req, res) => {
  const userId = req.params.id;
});
router.delete("/:id", (req, res) => {
  const userId = req.params.id;
});

module.exports = router;
