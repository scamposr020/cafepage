const controllerAdmin = {}


controllerAdmin.listAdmin = (req, res) => {
    res.render('Admin');
}



controllerAdmin.vereserva = (req, res) => {
    req.getConnection((err, conn) => {
        let inputReserva = req.body.nombreUsuario;
        conn.query('SELECT * FROM tb_reserva', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('index', {
                persona: result
            });
        });
    });
}
module.exports = controllerAdmin;