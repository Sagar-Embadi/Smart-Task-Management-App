const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/auth.controller");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.get("/users", ctrl.getAllUsers);
router.patch("/users/:id/status", ctrl.updateUserStatus);

module.exports = router;

