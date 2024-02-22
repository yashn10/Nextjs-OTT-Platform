const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    phone: {
        type: Number,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
        unique: true
    },

    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]

})


userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
})


userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        this.save();
        return token;
    } catch (error) {
        console.log("error", error);
    }
}


const User = mongoose.model("User", userSchema);

module.exports = User;