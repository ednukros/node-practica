const express = require('express');
const controller = require('./user.controller');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPostUser);

 module.exports = router;