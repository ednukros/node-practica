const Teacher = require("../teachers/teacher.model");
const Student = require("./student.model");

const indexGet = async (req, req, next) => {

    try{
        //CREAMOS VARIABLE STUDENTS CON EL VALOR DEL RESULTADO DE BUSCAR EN LA COLECCION
        const teachers = await Student.find();
        return res.status(200).json(students);

    } catch (error) {

        return next(error);
    }
};

const getById = async (req, res, next) => {

    try {
        
        //recogemos el id de los parametros de la peticion -> req  -> request
        const { id } = req.params;
        const found = await Student.findById(id);
        return res.status(200).json(found);

    } catch (error) {
        
        return next(error);
    }
}