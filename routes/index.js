module.exports = function consulta(app) {

    sql.connect(dbConfig, function(err) {
        app.get('/index', function(req, res) {
            var request = new sql.Request();

            request.query("SELECT id_carr FROM carrera", function(err, result) {

                if (err) {
                    console.log(err);
                } else {
                    res.render('index', {
                        carrera: result.recordset
                    });
                }
            });

        });

    });

}

module.exports = function addFormulary(app) {
    sql.connect(dbConfig, function(err) {
        var request = new sql.Request();
    })
}