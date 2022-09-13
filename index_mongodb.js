const mongoose = require('mongoose')
mongoose.connect('mongodb://idcurp:IDC4urp!@jasonchoi.dev:27017/idclab', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(()=> console.log('MongoDB connected'))
.catch((err) => {
    console.log(err);
});