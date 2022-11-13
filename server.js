const express = require('express');
const cors = require('cors');
const app = express();

//port 3001번 이용중
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');

mongoose.connect('mongodb://idcurp:IDC4urp!@jasonchoi.dev:27017/idclab',

    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

var corOptions = {
    origin: "http://localhost:8080"
};

//routers
const router = require('./routes/routes.js');
app.use('/api/', router);

//routes2 (mongodb)
const router2 = require('./routes/routertest.js');
app.use(express.json());
app.use('/api/', router2);

// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//testing api
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});


//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});