const { Router } = require("express");
const { getAllUsersCtrl } = require("../controllers/userController");

const router = require("express").Router();

router.route("/profile").get(getAllUsersCtrl);

module.exports = router;