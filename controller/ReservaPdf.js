const controller = {}



controller.PDFgenerated = (req, res) => {
    req.getConnection((err, conn) => {
        const pdfDoc = require('pdfkit');
        const pdfTable = require('voilab-pdf-table');
        const fs = require('fs');
        const docCreado = new pdfDoc();
        var carga;
        docCreado.pipe(carga = fs.createWriteStream('./controller/documento.pdf'), { encoding: 'utf16' });
        conn.query('Select tb_persona.IdPerso, Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Sala, Fecha, Hora, HoraEntrega, TotalDebe FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso', (err, result) => {

            if (err) {
                console.log(err);
            }
            let element = '';

            for (let index = 0; index < result.length; index++) {
                element = "Nombre: " + result[index].NombrePerso + "\n" + "Primer apellido:" + result[index].ApellidoPerso +
                    "\n" + "Segundo apellido:" + result[index].SegundoApellidoPerso +
                    "\n" + "Telefono:" + result[index].TelefonoPerso +
                    "\n" + "Correo electronico:" + result[index].CorreoPerso +
                    "\n" + "Sala reservada:" + result[index].Sala +
                    "\n" + "Fecha:" + result[index].Fecha +
                    "\n" + "Hora de entrega:" + result[index].HoraEntrega +
                    "\n" + "Total debe cliente:" + result[index].TotalDebe + "\n \n" + element;
            }

            docCreado.text(element);


            docCreado.end();

            carga.on('finish', async function() {
                res.sendFile(__dirname + '/documento.pdf');
            });
        });
    })

}
module.exports = controller;