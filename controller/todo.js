const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tb_persona', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('JoinOurTeam', {
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
        console.log(persona);

        const query = connection.query('INSERT INTO tb_persona set ?', persona, (err, resp) => {
            if (err) {

            } else {
                res.redirect('/');
            }
        });
    });
};

module.exports = controller;