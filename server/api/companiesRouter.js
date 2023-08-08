const express = require("express");
const { People, Date, Company, JobApplication } = require("../db");
const { findByToken } = require("../db/User");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const user = findByToken()

    const companies = await Company.findAll({
      // where: { user: user},
      //   include: [Date, People, JobApplication],
    });

    res.send(companies);
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

module.exports = router;
