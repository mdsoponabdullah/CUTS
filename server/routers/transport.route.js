
const route = require('express').Router();

const {getTransPorts}= require('../controllers/transport.controller');

route.get('/',getTransPorts);


module.exports=route;