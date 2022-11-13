const db = require("../models");
const Product = db.products;

const db2 = require("../models");
const { paragraphs } = require("../models/mongoindex");
const data = db2.paragraphs;

// get all products
const getallproducts = async (req, res) => {
    let products = await Product.findAll({
        attributes: ['statista_index', 'title', 'data', 'raw_caption', 'axis_title'],
    }
    );
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(products);
}

// get product by id
const getproductbyid = async (req, res) => {
    let statista_index = req.params.id;
    let product = await Product.findOne({
        attributes: ['statista_index', 'title', 'data', 'raw_caption', 'axis_title'],
        where: { statista_index : statista_index},
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(product);
}

//update product by id // 필요 x
const updateproductbyid = async (req, res) => {
    let id = req.params.id;
    let product = await Product.update({
        title: req.body.title,
        market: req.body.market,
        topic: req.body.topic,
    }, {
        where: { id: id },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(product);
}

//delete product by id
const deleteproductbyid = async (req, res) => {
    let id = req.params.id;
    let product = await Product.destroy({
        where: { statista_index : statista_index },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send("product deleted");
}

//pick random id from db if is_annotated == 0 and get products by that id
const pickrandomid = async (req, res) => {
    let statista_index = await Product.findAll({
        attributes: ['statista_index'],
        where: { is_annotated: 0 },
    });
    let randomId = statista_index[Math.floor(Math.random() * statista_index.length)];
    let product = await Product.findOne({
        attributes: ['statista_index', 'title', 'data','raw_caption','axis_title'],
        where: { statista_index : randomId.statista_index },
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(product);
}



//////////////////////////////////////////
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

    data.save();
    res.send(result.phrases);
}


// mongodb 전체 조회
const showall = async (req, res) => {
    let products = await paragraphs.find();
    res.status(200).send(products);
}


module.exports = {
    getallproducts,
    getproductbyid,
    updateproductbyid,
    deleteproductbyid,
    pickrandomid,
    test,
    testdb,
    showall
}

