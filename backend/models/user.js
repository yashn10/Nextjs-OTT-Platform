const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: Number,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    tokens: [
        {
            token: {
                type: String,
                required: true
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
        const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error('Token generation failed');
    }
}


const User = mongoose.model("User", userSchema);

module.exports = User;