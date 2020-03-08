const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM persona', (err, result) => {
            if (err) {
                res.json(err);
            }
            res.render('ejem', {
                persona: result
            });
        });
    });
};

controller.save = (req, res) => {
    req.getConnection((err, connection) => {
        var registro = {
            nombre: req.body.nombre,
            edad: req.body.edad
        };
        const query = connection.query('INSERT INTO persona set ?', registro, (err, persona) => {
            console.log(persona)
            res.redirect('/');
        })
    })
};

module.exports = controller;