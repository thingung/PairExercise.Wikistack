const router = require("express").Router();
const { db, Page, User } = require('../models');
const layout = require('../views/layout');
const addPage = require('../views/addPage');
// const { layout } = require("../views");

// I am in /wiki/
router.get("/", (req, res, next) => {
    try {
        res.send(layout());
    } catch(err) {
        next(err);
    }
});

// I am in /wiki/
router.post("/"), async (req, res, next) => {

    console.log(req.body);
    try {
        res.json(req.body);
    } catch(err) {
        next(err);
    }
};

// I am in /wiki/add/
router.get("/add", (req, res, next) => {
    try {
        res.send(addPage());
    } catch(err) {
        next(err);
    }
});

module.exports = router;