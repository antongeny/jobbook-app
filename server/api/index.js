const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/people", require("./peopleRouter"));
router.use("/companies", require("./companiesRouter"));
router.use("/users", require("./usersRouter"));

module.exports = router;
