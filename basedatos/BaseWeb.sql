
CREATE DATABASE proyectoWeb

USE proyectoweb

Create table tb_Persona(
	IdPerso int AUTO_INCREMENT primary key,
	NombrePerso varchar (50) NOT NULL,
	ApellidoPerso varchar (25) NOT NULL,
	SegundoApellidoPerso varchar (25),
	TelefonoPerso varchar (10) NOT NULL,
	CorreoPerso varchar (50) NOT NULL
    )
 
	insert into tb_Persona values (1,'Pepito', 'Figueres', 'Gamboa', '68468479','pepito@gmail.com')
	insert into tb_Persona values (2,'Pablito', 'Guitierres', 'Olaso', '48652395','pablito@gmail.com')
	insert into tb_Persona values (3,'Karla', 'Campos', 'Rojas', '62121245','kcampos@gmail.com')
    insert into tb_Persona values (4,'Rebecca', 'Fernandez', 'Jimenez', '78787455','rebf@gmail.com')
    
Create table tb_LogIn
	(
	Id_Usuario int AUTO_INCREMENT primary key,
	nombreUsuario varchar(50),
    passUsuario varchar(50),
    idPerso int,
    Foreign key (idPerso) references tb_Persona(IdPerso)
	)

 INSERT INTO tb_LogIn VALUES
   (1, 'admin123', 'admin123', 3),
   (2, 'usuario1', 'usuario1', 4)
   

Create table tb_Reserva
	(
	Id_Res int AUTO_INCREMENT primary key,
	Sala varchar(20) NOT NULL,
	Fecha varchar(40) NOT NULL,
    Hora varchar(40) NOT NULL,
    HoraEntrega varchar(40) NOT NULL,
    TotalDebe varchar(25) NOT NULL,
    idPerso int,
    Foreign key (idPerso) references tb_Persona(IdPerso)
	)

	insert into tb_Reserva values (1,'2','2020-09-15','09:30','10:30',"8000",1)




