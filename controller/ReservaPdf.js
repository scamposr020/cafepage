const controller = {}

controller.PDFgenerated = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select tb_persona.IdPerso, Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Sala, Fecha, Hora, HoraEntrega, TotalDebe FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso', (err, result) => {

            if (err) {
                console.log(err);
            }

        });
    })

    var pdf = require("pdf-creator-node");
    var fs = require('fs');

    // Read HTML Template
    var html = fs.readFileSync('Menu-Admin.ejs', 'utf8');

    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
        header: {
            height: "45mm",
            contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
        },
        "footer": {
            "height": "28mm",
            "contents": {
                first: 'Cover page',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: 'Last Page'
            }
        }

    };
    var users = [{
            name: "Shyam",
            age: "26"
        },
        {
            name: "Navjot",
            age: "26"
        },
        {
            name: "Vitthal",
            age: "26"
        }
    ]
    var document = {
        html: html,
        data: {
            users: users
        },
        path: "./output.pdf"
    };


}
module.exports = controller;