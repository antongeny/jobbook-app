const express = require("express");
const { People, Date, Company } = require("../db");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try{
        const user = {user} = req.body

        const people = await People.findAll({
            where: { user: user},
            include: [Date, Company],
        })

        res.send(people);

    }
    catch (err){
        return res.status(501).send(err.message)
    }

})


//for checking in browser
router.get("/br", async (req, res, next) => {
    try {
      const people = await People.findAll({});
  
      res.send(people);
    } catch (err) {
      return res.status(501).send(err.message);
    }
  });
  
  //for checking in browser for specific user
  router.get("/br/id", async (req, res, next) => {
    try {
      const userId = req.params;
  
      const people = await Poeple.findAll({
        where: { userId: userId },
      });
  
      res.send(companies);
    } catch (err) {
      return res.status(501).send(err.message);
    }
  });





module.exports = router;