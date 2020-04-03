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
        var setPersona = {
            NombrePerso: req.body.NombrePerso,
            ApellidoPerso: req.body.ApellidoPerso,
            SegundoApellidoPerso: req.body.SegundoApellidoPerso,
            TelefonoPerso: req.body.TelefonoPerso,
            CorreoPerso: req.body.CorreoPerso
        }
        let Sala = req.body.Sala;
        let Fecha = req.body.Fecha;
        let Hora = req.body.Hora;
        let HoraEntrega = req.body.HoraEntrega;
        const query = connection.query("SELECT * FROM tb_reserva WHERE Hora = '" + Hora + "' AND HoraEntrega = '" + HoraEntrega + "'" + "AND Fecha = '" + Fecha + "'", (err, respu) => {
            if (err) {
                console.log(err);
            }
            var resultado = respu.toString();
            console.log(resultado);
            if (resultado == "") {
                const query = connection.query('INSERT INTO tb_persona set ?', setPersona, (err, resp) => {
                    if (err) {
                        console.log(err);
                    }
                });

                const query2 = connection.query("INSERT INTO `tb_reserva` (Sala, Fecha, Hora, HoraEntrega, IdPerso) VALUES ('" + Sala + "', '" + Fecha + "', '" + Hora + "', '" + HoraEntrega + "',(SELECT IdPerso FROM tb_persona ORDER BY IdPerso DESC LIMIT 1 ))", (err, resp) => {
                    if (err) {
                        console.log(err);
                    }
                });

            }
            if (resultado != "") {
                req.flash('error',
                    'Ya existe esa reserva')
            }
            res.redirect('/Core97#contact');
        })

    });
};

module.exports = controller;