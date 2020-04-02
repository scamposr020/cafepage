const express = require('express'),
    path = require('path'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

var flash = require('express-flash');
var session = require('express-session');

const app = express();

const pruebaRoutes = require('./routes/ruta');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectoWeb'
}, 'single'));

app.use(express.urlencoded({ extended: false }));
app.use(session({
    cookie: { maxAge: 60000 },
    secret: 'woot',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use('/', pruebaRoutes);

// static files
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.static(path.join(__dirname, '/js')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});