const controllerLog = {}


controllerLog.listLog = (req, res) => {
    res.render('Login');
}

controllerLog.logged = (req, res) => {
    req.getConnection((err, conn) => {
        let nombreUsuario = req.body.nombreUsuario;
        let passUsuario = req.body.passUsuario;

        conn.query('SELECT * FROM tb_LogIn Where nombreUsuario = "' + nombreUsuario + '"and passUsuario = "' + passUsuario + '"', (err, result) => {
            var resultado = result.toString();
            if (resultado == "") {
                req.flash('error', 'No existe ese administrador');
                res.redirect('/Login');
            }
            if (resultado != "") {
                res.redirect('/loadMenuAdmin');
            }
        });
    });
}
module.exports = controllerLog;