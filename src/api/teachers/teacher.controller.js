const Teacher = require("./teacher.model");

const indexGet = async (req, res, next) => {

    try {
        //CREAMOS VARIABLE TEACHERS CON EL VALOR DEL RESULTADO DE BUSCAR EN LA COLECCION
        const teachers = await Teacher.find();
        return res.status(200).json(teachers);

    } catch (error) {

        return next(error);
    }
};

const getById = async (req, res, next) => {
    try {

        //recogemos el id de los parámetros de la peticion -> req -> request
        const { id } = req.params;
        const found = await Teacher.findById(id);
        return res.status(200).json(found);
    } catch (error) {

        return next(error);
    }
};

const getByName = async (req, res, next) => {
    try {
        //recogemos el id de los paramatros de la peticion -> req -> request
        const { name } = req.params;
        const found = await Teacher.find({name: name});
        return res.status(200).json(found);
    } catch (error) {

        return next(error);
    }

};

const createPost = async (req, res, next) => {

    try {
        
        console.log(req.body);

        const teacherToBeCreated = new Teacher(req.body)
        const created = await teacherToBeCreated.save();

        return res.status(201).json(created);

    } catch (error) {
        
        return next(error);

    }
};

const editPut = async(req, res, next) => {

    try {

        const { id } = req.params; //req.params.id
        const fields = {...req.body};
        const options = { new: true };
        console.log('fields en teacher', options);
        const edited = await Teacher.findByIdAndUpdate(id, fields, options);
        return res.status(200).json(edited);

    } catch (error) {
        return next(error);
    }
};

const deleteTeacher = async (req, res, next) => {

    try {
        const { id } = req.params;
        const deleted = await Teacher.delete({ _id: id});
        if(deleted.deletedCount) {
            return res.status(200).json("Elemento eliminado con éxito");
        }else{
            return res.status(200).json("No se encuentra el elemento para eliminar");
        }
    } catch (error) {
        return next(error);
    }

}

module.exports = {
    indexGet,
    getById,
    createPost,
    editPut,
    deleteTeacher,
    getByName
}