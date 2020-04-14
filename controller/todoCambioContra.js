const controllerCambioContra = {}

controllerCambioContra.listCambioContra = (req, res) => {

    res.render('Admin_cambioContra');

}
controllerCambioContra.editCambioContra = (req, res) => {
    req.getConnection((err, connection) => {

        let nombreUsuario = req.body.nombreUsuario;
        let passUsuario = req.body.passUsuario;

        connection.query('UPDATE tb_LogIn SET passUsuario = "' + passUsuario + '" WHERE IdPerso =  (SELECT IdPerso FROM tb_LogIn WHERE nombreUsuario = "' + nombreUsuario + '")', (err, result) => {
            if (err) {
                console.log(err);
            }
            var resultado = JSON.stringify(result.affectedRows)
            if (nombreUsuario == "" || passUsuario == "") {
                req.flash('alerta', 'Debe de llenar todos los campos')
            } else {
                if (resultado == "0") {
                    req.flash('error', 'Ese usuario no existe')
                } else {
                    if (resultado == "1") {
                        req.flash('confirmacion', 'Se ha cambiado la contraseña')
                    }
                }
            }
            res.redirect('/loadCambioContra');
        });
    });
}

module.exports = controllerCambioContra;