const router = require("express").Router();
const { getAllUsersCtrl } = require("../controllers/userController");
const { VerifyToken } = require("../middlewares/verifyToken");

router.route("/profile").get( VerifyToken ,getAllUsersCtrl);

module.exports = router;