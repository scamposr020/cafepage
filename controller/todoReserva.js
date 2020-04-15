const controllerAdmin = {}

controllerAdmin.listReserva = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select tb_persona.IdPerso, Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Sala, Fecha, Hora, HoraEntrega, TotalDebe FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso', (err, result) => {
            if (err) {
                console.log(err);
            }

            res.render('Admin_reserva', {

                verReserva: result
            });
            console.log(result.ApellidoPerso);
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


        let Sala = req.body.Sala;
        let Fecha = req.body.Fecha;
        let Hora = req.body.Hora;
        let HoraEntrega = req.body.HoraEntrega;
        const query = conn.query("SELECT * FROM tb_reserva WHERE Hora = '" + Hora + "' AND HoraEntrega = '" + HoraEntrega + "'" + "AND Fecha = '" + Fecha + "'", (err, respu) => {
            if (err) {
                console.log(err);
            }
            var moment = require('moment');
            var startTime = moment(Hora, 'HH:mm:ss');
            var endTime = moment(HoraEntrega, 'HH:mm:ss');
            var duracionentreHoras = endTime.diff(startTime, 'hours')
            var TotalDebe = duracionentreHoras * 8000 + "";

            var resultado = respu.toString();
            if (duracionentreHoras != 0) {
                if (resultado == "") {
                    const query = conn.query('INSERT INTO tb_persona set ?', setPersona, (err, resp) => {
                        if (err) {
                            console.log(err);
                        }
                        const query2 = conn.query("INSERT INTO `tb_reserva` (Sala, Fecha, Hora, HoraEntrega, TotalDebe, IdPerso) VALUES ('" + Sala + "', '" + Fecha + "', '" + Hora + "', '" + HoraEntrega + "', '" + TotalDebe + "',(SELECT IdPerso FROM tb_persona ORDER BY IdPerso DESC LIMIT 1 ))", (err, resp) => {
                            if (err) {
                                console.log(err);
                            }
                            res.redirect('/reserva');
                        });
                    });
                }
                if (resultado != "") {
                    req.flash('error', 'Ya existe esa reserva');
                    res.redirect('/reserva');
                }
            } else {
                req.flash('errorHora', 'La reservacion minimo debe ser igual o mayor a una hora');
                res.redirect('/reserva');
            }
        });
    });
}


controllerAdmin.delReserva = (req, res) => {
    const { IdPerso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM tb_reserva WHERE IdPerso = ?', [IdPerso], (err, resp) => {
            if (err) {
                console.log(err);
            }
            conn.query('DELETE FROM tb_testimonios WHERE IdPerso = ?', [IdPerso], (err, resp) => {
                if (err) {
                    console.log(err);
                }
                conn.query('DELETE FROM tb_persona WHERE IdPerso = ?', [IdPerso], (err, resp) => {
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
    const { IdPerso } = req.params;
    req.getConnection((err, conn) => {
        conn.query('Select tb_persona.IdPerso, Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Sala, Fecha, Hora, HoraEntrega FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso WHERE tb_Reserva.idPerso = ?', [IdPerso], (err, result) => {
            if (err) {
                console.log(err);
            }
            res.render('Admin_editar', {
                verReserva: result[0]
            });
        });
    });
}

controllerAdmin.editReserva = (req, res) => {

    const { IdPerso } = req.params;
    const clienteInfo = {
        NombrePerso: req.body.NombrePerso,
        ApellidoPerso: req.body.ApellidoPerso,
        SegundoApellidoPerso: req.body.SegundoApellidoPerso,
        TelefonoPerso: req.body.TelefonoPerso,
        CorreoPerso: req.body.CorreoPerso
    }
    let Hora = req.body.Hora;
    let HoraEntrega = req.body.HoraEntrega;

    var moment = require('moment');
    var startTime = moment(Hora, 'HH:mm:ss');
    var endTime = moment(HoraEntrega, 'HH:mm:ss');
    var duracionentreHoras = endTime.diff(startTime, 'hours')
    var TotalDebe = duracionentreHoras * 8000 + "";

    const reservaInfo = {
        Sala: req.body.Sala,
        Fecha: req.body.Fecha,
        Hora: req.body.Hora,
        HoraEntrega: req.body.HoraEntrega,
        TotalDebe: TotalDebe
    }
    if (duracionentreHoras != 0) {


        req.getConnection((err, conn) => {
            conn.query('UPDATE tb_persona SET ? WHERE IdPerso = ?', [clienteInfo, IdPerso], (err, res) => {
                if (err) {
                    console.log(err);
                }
            });
            conn.query('UPDATE tb_reserva SET ? WHERE IdPerso = ?', [reservaInfo, IdPerso], (err, res) => {
                if (err) {
                    console.log(err);
                }

            });
            res.redirect('/reserva');
        });
    } else {
        const { IdPerso } = req.params;

        req.flash('errorHora', 'La reservacion minimo debe ser igual o mayor a una hora');
        res.redirect('/loadEditarReserva/' + IdPerso + '');

    }

}
module.exports = controllerAdmin;