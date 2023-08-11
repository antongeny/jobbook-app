const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth"));
router.use("/people", require("./peopleRouter"));
router.use("/companies", require("./companiesRouter"));
router.use("/users", require("./usersRouter"));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
