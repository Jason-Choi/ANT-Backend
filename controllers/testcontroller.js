const db2 = require("../models");
const { paragraphs } = require("../models/mongoindex");
const Goods = db2.paragraphs;


// req 받
const test = async (req, res) => {

    console.log (req.body);
    const result = req.body;
    res.send(result);
}

module.exports = {
    test
}