const mongoose = require('mongoose')
mongoose.connect('mongodb://idcurp:IDC4urp!@jasonchoi.dev:27017/idclab', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

const connection = mongoose.connection
connection.on('error', console.error)
connection.once('open', () => {
  console.log('Connected to mongod server')
})