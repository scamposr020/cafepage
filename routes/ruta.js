const router = require('express').Router();

const todo = require('../controller/todo');
const todoIndex = require('../controller/todoIndex');
const todoAdmin = require('../controller/todoAdmin');
const todoLog = require('../controller/todoLogIn');


router.get('/', todo.list);
router.get('/Core97', todoIndex.listIndex);
router.post('/add', todo.save);
router.get('/login', todoLog.listLog);
router.post('/logged', todoLog.logged);
router.get('/admin', todoAdmin.listAdmin);
router.get('/vereserva', todoAdmin.vereserva)


module.exports = router;