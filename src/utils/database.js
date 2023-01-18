const mongoose = require("mongoose");

const DB_URL  = 'mongodb+srv://inma-db-access:root@cluster0.eoh9zrg.mongodb.net/prueba?retryWrites=true&w=majority'

const connectDB = async () =>{
    
    try{
        mongoose.set("strictQuery", true);
        const db = await mongoose.connect(DB_URL);
        const { name, host, port } = db.connection;
        console.log(`[Server] Conectado con éxtio a: ${name} en host ${host} en puerto ${port}`);
    
    }catch(error) {
        console.log('[Server ERROR] conectando a la base de datos', error);
    }


};

module.exports = {
    connectDB
}