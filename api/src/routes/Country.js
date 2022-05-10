const { Router } = require("express");
const router = Router();
const functions = require("../functions/Country");

router.get("/", functions.getCountries);
router.get("/getAll", functions.getAll);
router.get("/:id", functions.getById);
// router.get("/:name", functions.getByName);

module.exports = router;
