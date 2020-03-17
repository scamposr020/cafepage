const router = require('express').Router();

const todo = require('../controller/todo');

router.get('/', todo.list);
router.post('/add', todo.save);

module.exports = router;