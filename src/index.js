const express = require('express')
const expressHbs  = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000
const route = require('./routes')
require('dotenv').config()
const db = require('./config/db')

//Connect to DB
db.connect();

//static
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
const morgan = require('morgan')
app.use(morgan('combined'))

//Template engine
app.engine('hbs', expressHbs.engine({
  extname: '.hbs'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})




