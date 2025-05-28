const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/task.controller");
const auth = require("../middleware/auth.middleware");

router.use(auth);
router.get("/", ctrl.getAll);
router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);
module.exports = router;
