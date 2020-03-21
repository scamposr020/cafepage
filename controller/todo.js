const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tb_persona', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('index', {
                persona: result
            });
        });
    });
};

controller.save = (req, res) => {

    req.getConnection((err, connection) => {
        var persona = {
            NombrePerso: req.body.NombrePerso,
            ApellidoPerso: req.body.ApellidoPerso,
            SegundoApellidoPerso: req.body.SegundoApellidoPerso,
            CorreoPerso: req.body.CorreoPerso,
            TelefonoPerso: req.body.TelefonoPerso
        };
        var reserva = {
            Combo: req.body.Combo,
            Fecha: req.body.Fecha
        }

        const query = connection.query('INSERT INTO tb_persona set ?', persona, (err, resp) => {
            if (err) {
                console.log(err);
            }
        });

        const query2 = connection.query('INSERT INTO tb_reserva set ?', reserva, (err, resp) => {
            if (err) {
                console.log(err);
            }

        });
        res.redirect('/');
    });
};

module.exports = controller;