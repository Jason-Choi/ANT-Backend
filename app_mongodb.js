const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const mongoose = require('mongoose')

mongoose.connect('mongodb://idcurp:IDC4urp!@jasonchoi.dev:27017/idclab',

    err => {
        if(err) throw err;
        console.log('connected to MongoDB')
    });

//routes
const router2 = require('./routes/routertest.js');
app.use(express.json());
app.use('/api/', router2);

//test api
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my application." });
});
