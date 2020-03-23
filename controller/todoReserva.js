const controllerAdmin = {}

controllerAdmin.listReserva = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Combo, Fecha FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso', (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('Admin_reserva', {
                verReserva: result
            });

        });
    });
}


controllerAdmin.saveReserva = (req, res) => {

    req.getConnection((err, conn) => {
        var setPersona = {
            NombrePerso: req.body.NombrePerso,
            ApellidoPerso: req.body.ApellidoPerso,
            SegundoApellidoPerso: req.body.SegundoApellidoPerso,
            TelefonoPerso: req.body.TelefonoPerso,
            CorreoPerso: req.body.CorreoPerso
        }


        let Combo = req.body.Combo;
        let Fecha = req.body.Fecha;

        const query = conn.query('INSERT INTO tb_persona set ?', setPersona, (err, resp) => {
            if (err) {
                console.log(err);
            }
            const query2 = conn.query("INSERT INTO `tb_reserva` (Combo, Fecha, IdPerso) VALUES ('" + Combo + "', '" + Fecha + "',(SELECT IdPerso FROM tb_persona ORDER BY IdPerso DESC LIMIT 1 ))", (err, resp) => {
                if (err) {
                    console.log(err);
                }
            });
            res.redirect('/reserva');
        });


    });
}


controllerAdmin.delReserva = (req, res) => {
    const { Id_Res } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tb_reserva WHERE IdPerso = ?', [Id_Res], (err, resp) => {
            if (err) {
                console.log(err);
            }
            conn.query('DELETE FROM tb_testimonios WHERE IdPerso = ?', [Id_Res], (err, resp) => {
                if (err) {
                    console.log(err);
                }
                conn.query('DELETE FROM tb_persona WHERE IdPerso = ?', [Id_Res], (err, resp) => {
                    if (err) {
                        console.log(err);
                    }

                    res.redirect('/reserva');
                });
            });
        });
    });
}


controllerAdmin.loadEditReserva = (req, res) => {
    const { Id_Res } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tb_reserva WHERE IdPerso = ?', [Id_Res], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('Admin_editar', {
                verReserva: result[0]
            });

        });
    });
}


module.exports = controllerAdmin;