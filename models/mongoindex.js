const mongoose = require('mongoose');
const { STRING } = require('sequelize');
const Schema = mongoose.Schema;

const paragraphSchema = Schema({
    id: { type: Number },
    table: { type: String },
    unit: { type: String },
    __v: {
        type: Number,
        select: false
    },
    caption: {
        sentence: [
            {
                sentencetype: {
                    type: String,
                    enum: ['overview', 'describe', 'compare', 'trend', null],
                },
                phrases: [{
                    phrasetype: {
                        type: String,
                        enum: ['key', 'series', 'value', null],
                        required: true
                    },
                    source: String,
                    target: String
                }]
            }
        ]
    }
});

const db2 = {};
db2.mongoose = mongoose;
db2.paragraphs = mongoose.model("paragraphs", paragraphSchema);

module.exports = db2;