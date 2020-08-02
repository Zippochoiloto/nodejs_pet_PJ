const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var userRoutes = require('./routes/user.route')

const port = 3000;
app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
  res.render('index', {
    name: 'AAA'
  })
});

app.use('/users', userRoutes)

app.listen(port, () => console.log(`Example app is running on port ${port}`))
