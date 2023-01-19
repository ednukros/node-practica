const express = require('express');
const controller = require('./student.controller');

const router = express.Router();

router.get('./', controller.indexGet);

// module.exports = router;