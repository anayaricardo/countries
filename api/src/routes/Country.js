const { Router } = require("express");
const router = Router();
const functions = require("../functions/Country");

router.get("/", functions.getCountries);
router.get("/:id", functions.getId);
router.get("/getAll", functions.getAll);

module.exports = router;
