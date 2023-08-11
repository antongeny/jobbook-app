const express = require("express");
const router = express.Router();
const { People, Date, Company, JobApplication, User } = require("../db");

// router.get("/", async (req, res, next) => {
//   try {
//     res.send(await User.findByToken(req.headers.authorization));
//   } catch (error) {
//     next(error);
//   }
// });

//shows all companies
router.get("/", async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const userId = req.body;
      console.log("userId", userId);
      const companies = await Company.findAll({
      where: { userId: userId.userId },
      //   include: [Date, People, JobApplication],
      });

      res.send(companies);
    }
    // if token, then do that
  } catch (err) {
    return res.status(501).send(err.message);
  }
});

//shows companies associated with a user
// router.get("/", async (req, res, next) => {
// });

module.exports = router;
