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
router.get('/elimiReserva/:Id_Res', todoAdmin.delReserva)
router.get('/loadEditarReserva/:Id_Res', todoAdmin.loadEditReserva)
    /*router.post('/saveeditarReserva/:Id_Res', todoAdmin.editReserva)

    */
module.exports = router;