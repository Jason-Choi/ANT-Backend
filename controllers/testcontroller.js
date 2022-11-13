const db2 = require("../models");
const { paragraphs } = require("../models/mongoindex");
const data = db2.paragraphs;


const test = async (req, res) => {

    console.log (req.body);
    const result = req.body;
    res.send(result);
}

// req body 값들을 mongodb에 저장하기
const testdb = async (req, res) => {
    console.log (req.body);
    const result = req.body;

    // mongodb에 저장, 추가요소 추가하기

    const data = new paragraphs({
        type : result.type,
        phrases : result.phrases,
    });

    // const data = new paragraphs({
    //     statista_index: result.statista_index,
    //     title: result.title,
    // });
    data.save();
    res.send(result.phrases);
}

// body의 statista_index를 mongodb에 저장하기
//const testdb3 = async (req, res) => {


// mongodb 전체 조회
const getallproducts = async (req, res) => {
    let products = await paragraphs.find();
    res.status(200).send(products);
}


module.exports = {
    test,
    testdb,
    getallproducts,
}