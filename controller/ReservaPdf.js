const controller = {}

controller.PDFgenerated = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('Select tb_persona.IdPerso, Id_Res, NombrePerso, ApellidoPerso,SegundoApellidoPerso, TelefonoPerso, CorreoPerso, Sala, Fecha, Hora, HoraEntrega, TotalDebe FROM tb_Persona INNER JOIN tb_Reserva ON tb_Persona.idPerso = tb_Reserva.idPerso', (err, result) => {

            if (err) {
                console.log(err);
            }

        });
    })

    document.getElementById("imprimir").addEventListener("click", DescargaPdf);

    function DescargaPdf() {
        var doc = new jsPDF();
        doc.text("holi");
        doc.save("output.pdf");
    }
    DescargaPdf();
}
module.exports = controller;