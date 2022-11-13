const db = require("../models");
const Goods = db.mongoindex;



// router.post('/test', async (req, res) => {
//     const { id, name, price } = req.body;

//     isExist = await Goods.find({ id });
//     if (isExist.length == 0) {
//     await Goods.create({ id, name, price });
//     }
//     res.send({ result: "success" });
// });

const test = async (req, res) => {

    const { id, name, price } = req.body;

    isExist = await Goods.find({ id });
    if (isExist.length == 0) {
    await Goods.create({ id, name, price });
    }
    res.send({ result: "success" });

}

module.exports = {
    test
}