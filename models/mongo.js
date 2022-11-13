const mongoose = require('mongoose');
const { default: ModelManager } = require('sequelize/types/model-manager');
const Schema = mongoose.Schema;

const Sentence = new Schema({
    type: {type: String, enum: ['overview', 'describe', 'compare', 'trend', null]},
    phrases : {type: String, Referece: 'Phrases'}
});

const Phrase = new Schema({
    type: {type: String, enum: ['key', 'series', 'value', null]},
    source: String,
    target: String
});

router.post("/", async (req, res, next) => {
    const{overview, describe, compare, trend} = req.body;
    try {
        const Sentence = await Sentence.create({
            overview,
            describe,
            compare,
            trend,
        });
        res.send("값을 잘 받았습니다!");
    }
    catch(err) {
        console.error(err);
        next(err);
        res.send("값을 받지 못하였습니다.");
    }
  });

router.post("/", async (req, res, next) => {
    const{key, series, value} = req.body;
    try {
        const Phrase = await Phrase.create({
            key,
            series,
            value,
        });
        res.send("값을 잘 받았습니다!");
    }
    catch(err) {
        console.error(err);
        next(err);
        res.send("값을 받지 못하였습니다.");
    }
  });