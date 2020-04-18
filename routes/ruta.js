const router = require('express').Router();

const todo = require('../controller/todo');
const todoIndex = require('../controller/todoIndex');
const todoAdmin = require('../controller/todoReserva');
const todoLog = require('../controller/todoLogIn');
const todoCambioContra = require('../controller/todoCambioContra');
const todoMenu = require('../controller/todoMenu');
const todoHome = require('../controller/todoHomepage');
const reservaPdf = require('../controller/ReservaPdf');


router.get('/', todoHome.list);
router.get('/Cafe97', todo.list);
router.get('/Core97', todoIndex.listIndex);
router.post('/add', todo.save);
router.get('/login', todoLog.listLog);
router.post('/logged', todoLog.logged);
router.get('/loadMenuAdmin', todoMenu.listMenu)
router.get('/reserva', todoAdmin.listReserva)
router.post('/agregarReserva', todoAdmin.saveReserva)
router.get('/elimiReserva/:IdPerso', todoAdmin.delReserva)
router.get('/loadEditarReserva/:IdPerso', todoAdmin.loadEditReserva)
router.post('/saveeditarReserva/:IdPerso', todoAdmin.editReserva)
router.get('/loadCambioContra', todoCambioContra.listCambioContra)
router.post('/editCambioContra', todoCambioContra.editCambioContra)
router.get('/loadPdf', reservaPdf.PDFgenerated)


module.exports = router;