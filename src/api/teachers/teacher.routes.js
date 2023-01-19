const express = require('express');
const controller = require('./teacher.controller');

const router = express.Router();

router.get('/', controller.indexGet);
router.post('/create', controller.createPost);
router.post('/delete/:id', controller.deleteTeacher);
router.get('/:name', controller.getByName);
router.get('/:id', controller.getById);
router.post('/edit', controller.editPut);

// router.get('/status', controller.statusGet);

module.exports = router;