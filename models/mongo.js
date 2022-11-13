

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