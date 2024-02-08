const mongoose = require('mongoose');


const loginSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        require: true
    },

    password: {
        type: String,
        unique: true,
        require: true
    }

})


const Login = mongoose.model("Login", loginSchema);

module.exports = Login;