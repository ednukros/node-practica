const express = require("express");  //LEVANTAMOS SERVIDOR

const cors = require("cors");  //SIRVE PARA PERMITIR O DENEGAR QUE SE PUEDA ACCEDER AL SERVIDOR EN X SITIOS

const db = require("./src/utils/database.js") //IMPORTAMOS DB

db.connectDB(); //FUNCION QUE ME CONECTA CON LA BD EN NUESTRO SERVIDOR

//IMPORTAMOS TODAS LAS RUTAS PARA PODER UTILIZARLAS EN NUESTRO SERVIDOR.
const indexRoutes = require("./src/api/index/index.routes");
const teachersRouters = require("./src/api/teachers/teacher.routes");

const PORT = 8080;  //DECLARAMOS EL PUERTO DONDE LEVANTAR NUESTRO SERVIDOR

const server = express(); //EJECUTAMOS NUESTRO EXPRESS() PARA TENER ACCESO AL SERVER Y PODER HACER CIERTAS COSAS

// const router = express.Router();

//PARA QUE ADMITA PETICIONES DESDE OTRO SERVIDOR, FRONT O APP. AL ESTAR VACIAS TODOS SE PODRÁN CONECTAR
server.use(cors());

//TRANSFORMAR EL REQ.BODY
server.use(express.json());

//CONVIERTE CUANDO MANDAMOS UN FORM O FORMDATA AL SERVER
server.use(express.urlencoded({ extended: true}));

//CONFIGURAMOS TODAS LAS RUTAS DE NUESTRO SERVER
server.use("/teachers", teachersRouters);

server.use("/", indexRoutes);

//POR AQUÍ PASARÁN TODAS LAS RUTAS QUE NO EXISTAN
server.use("*", (req, res, next) => {
    return res.status(404).json("No se encuentra la URL. Prueba con otra URL");

});

//CONTROLADOR DE ERRORES
server.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Unexpected Error!";
    return res.status(status).json(message);
})

// router.get("/", (request, result) => {

//     return result.status(200).json("SERVER WORKING");

// })

server.listen(PORT, () => {

    console.log("Server funcionando!");
});