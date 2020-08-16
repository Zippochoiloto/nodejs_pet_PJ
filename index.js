require('dotenv').config();

console.log(process.env.SESSION_SECRET)

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var userRoutes = require('./routes/user.route')
var authRoutes = require('./routes/auth.route')
var cookieParser = require('cookie-parser')
var authMiddleware = require('./middleware/auth.middleware');

const port = 3000;
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser('MY SECRET'));

app.get('/', (req, res) => {
  res.render('index', {
    name: 'AAA'
  })
});


app.use('/users',authMiddleware.requireAuth, userRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => console.log(`Example app is running on port ${port}`))
