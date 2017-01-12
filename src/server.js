var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index', { message: 'Sup there!' })
})


app.listen(3000, function () {
  console.log('Other app listening on port 3000!')
})
