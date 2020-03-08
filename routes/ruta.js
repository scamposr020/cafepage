const router = require('express').Router();

const todo = require('../controllers/todo');

router.get('/', todo.list);
router.post('/add', todo.save);

module.exports = router;