const router = require("express").Router();
const { db, Page, User } = require('../models');
const layout = require('../views/layout');

// I am in
router.get("/", (req, res, next) => {
    try {
        res.send("Hello world")
    } catch(err) {
        next(err);
    }
});

// I am in
router.post("/"), (req, res, next) => {
    try {
        res.send();
    } catch(err) {
        next(err);
    }
};

// I am in 
router.get("/add", (req, res, next) => {
    try {
        res.send();
    } catch(err) {
        next(err);
    }
});

module.exports = router;