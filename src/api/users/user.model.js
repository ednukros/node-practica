const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Introduce un nombre de alumno']
    },

    age: {
        type: Number

    },

    contactEmail: {
        type: String,
        require: true,
        unique: true,
    },


}, {
    timestamps: true,
})

const User = mongoose.model("users", userSchema);

module.exports = User;