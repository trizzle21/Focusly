var express = require('express')
var app = express()


app.get('/', function (req, res) {
  res.send('Hello Dee!')
})

app.listen(3000, function () {
  console.log('Other app listening on port 3000!')
})
