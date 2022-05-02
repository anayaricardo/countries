const { Router } = require("express");
const router = Router();
const functions = require("../functions/Activity");

router.get("/", functions.getAllActivities);
router.post("/", functions.addNewActivity);

module.exports = router;
