var express = require('express')
var db = require('../db')

var controller = require('./controller/view.controller')

var router = express.Router();

module.exports = router

router.get('/', controller.index);

router.get('/search', controller.search)

router.get('/create', controller.create)

router.get('/:id', controller.get)

router.post('/create', controller.postCreate)