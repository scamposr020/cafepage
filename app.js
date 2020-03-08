const express = require('express'),
    path = require('path'),
    // morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

const pruebaRoutes = require('./routes/ruta');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(morgan('dev'));
let conrec = app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practixa'
}, 'single'));

app.use(express.urlencoded({ extended: false }));
app.use('/', pruebaRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});