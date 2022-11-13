// type Paragraph = Sentence[]

// interface Sentence = {
// 	type: "overview" | "describe" | "compare" | "trend" | null,
// 	phrases: phrase[],
// }

// interface phrase = {
// 	type: "key" | "series" | "value" | null,
// 	source: string,
// 	target: string
// } 


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paragraphSchema = new Schema({
    type: {
        type: String,
        enum: ['overview', 'describe', 'compare', 'trend', null],
        default: null
    },
    phrases: [{
        type: {
            type: String,
            enum: ['key', 'series', 'value', null],
            default: null
        },  
    }]
});

const db2 = {};
db2.mongoose = mongoose;
db2.paragraphs = mongoose.model("paragraphs", paragraphSchema);

module.exports = db2;