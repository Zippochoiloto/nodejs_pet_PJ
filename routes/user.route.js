var express = require('express')
var db = require('../db')

var controller = require('./controller/view.controller')
var authMiddleware = require('../middleware/auth.middleware')
var router = express.Router();

module.exports = router

router.get('/cookie', function(req, res, next) {
    res.cookie('user-id', 12345);
    res.send('Hello')
})

router.get('/',authMiddleware.requireAuth, controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.get)

router.post('/create', controller.postCreate)