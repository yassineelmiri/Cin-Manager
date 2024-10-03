const router = require("express").Router();
const { registerUserCtrl, LoginUserCtrl } = require("../controllers/authController");

// /api/auth/register
router.post("/register",registerUserCtrl);
router.post("/login",LoginUserCtrl)

module.exports = router;
