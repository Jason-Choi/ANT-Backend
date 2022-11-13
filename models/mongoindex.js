const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paragraphSchema = mongoose.Schema({
    statista_index: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
        versionKey: false 
    
});

//port 3001번 이용중


const db2 = {};
db2.mongoose = mongoose;
db2.paragraphs = mongoose.model("paragraphs", paragraphSchema);

module.exports = db2;