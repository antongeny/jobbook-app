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






module.exports = router;