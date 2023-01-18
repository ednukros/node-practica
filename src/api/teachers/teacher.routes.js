const express = require('express');
const controller = require('./teacher.controller');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPost);
// router.get('/status', controller.statusGet);

module.exports = router;