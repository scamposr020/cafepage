const router = require('express').Router();

const todo = require('../controller/todo');
const todoIndex = require('../controller/todoIndex');
const todoAdmin = require('../controller/todoReserva');
const todoLog = require('../controller/todoLogIn');


router.get('/', todo.list);
router.get('/Core97', todoIndex.listIndex);
router.post('/add', todo.save);
router.get('/login', todoLog.listLog);
router.post('/logged', todoLog.logged);
router.get('/reserva', todoAdmin.listReserva)
router.post('/agregarReserva', todoAdmin.saveReserva)
router.get('/elimiReserva/:IdPerso', todoAdmin.delReserva)
router.get('/loadEditarReserva/:IdPerso', todoAdmin.loadEditReserva)
router.post('/saveeditarReserva/:IdPerso', todoAdmin.editReserva)

module.exports = router;