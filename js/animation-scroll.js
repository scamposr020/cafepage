
function apareceScroll (){
	var html = document.getElementsByTagName ("html")[0];
	
	var elementoAparece = document.getElementsByClassName("anima1");
	
	document.addEventListener("wheel", function(){
		
		var topVent = html.scrollTop;
		for(i = 0; i < elementoAparece.length; i++ )
		{
			var topElem = elementoAparece[i].offsetTop;
			
			if(topVent > topElem - 600){
				elementoAparece[i].style.opacity = 1;
			}
		}
	})		
}


function apareceScroll2 (){
	var html = document.getElementsByTagName ("html")[0];
	
	var elementoAparece = document.getElementsByClassName("anima2");
	
	document.addEventListener("wheel", function(){
		
		var topVent = html.scrollTop;
		for(i = 0; i < elementoAparece.length; i++ )
		{
			var topElem = elementoAparece[i].offsetTop;
			
			if(topVent > topElem - 500){
				elementoAparece[i].style.opacity = 1;
			}
		}
	})		
}


function apareceScroll3 (){
	var html = document.getElementsByTagName ("html")[0];
	
	var elementoAparece = document.getElementsByClassName("anima3");
	
	document.addEventListener("wheel", function(){
		
		var topVent = html.scrollTop;
		for(i = 0; i < elementoAparece.length; i++ )
		{
			var topElem = elementoAparece[i].offsetTop;
			
			if(topVent > topElem - 400){
				elementoAparece[i].style.opacity = 1;
			}
		}
	})		
}


apareceScroll();
apareceScroll2();
apareceScroll3();




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
















