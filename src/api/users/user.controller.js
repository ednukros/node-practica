const User = require("./user.model");

const indexGet = async (req, res, next) => {

    try{
        //CREAMOS VARIABLE STUDENTS CON EL VALOR DEL RESULTADO DE BUSCAR EN LA COLECCION
        const teachers = await Student.find();
        return res.status(200).json(users);

    } catch (error) {

        return next(error);
    }
};

const createPostUser = async (req, res, next) => {

    try {
        
        console.log(req.body);

        const StudentToBeCreated = new User(req.body)
        const created = await UserToBeCreated.save();

        return res.status(201).json(created);

    } catch (error) {
        
        return next(error);

    }
};


const getById = async (req, res, next) => {

    try {
        
        //recogemos el id de los parametros de la peticion -> req  -> request
        const { id } = req.params;
        const found = await User.findById(id);
        return res.status(200).json(found);

    } catch (error) {
        
        return next(error);
    }
}

module.exports = {
    indexGet,
    getById,
    createPostUser
}