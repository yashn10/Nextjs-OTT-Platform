const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const User = require('../models/user');
const Login = require('../models/login');


router.post("/contact", async (req, res) => {

    const { name, phone, desc } = req.body;

    if (!name || !phone || !desc) {
        return res.status(422).json({ error: "please fill all the fields" });
    } else {

        try {
            const contacts = new Contact({ name, phone, desc });
            const saved = await contacts.save();

            if (saved) {
                return res.status(201).json({ message: "message submitted successfully" });
            } else {
                return res.status(500).json({ error: "error occurs" });
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ error: "Internal server error" });
        }

    }

})


router.post("/user", async (req, res) => {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(404).json({ error: "please fill all the fields properly" });
    } else {
        try {
            const userexist = await User.findOne({ email: email, password: password });
            if (userexist) {
                return res.status(404).json({ message: "User already exists with same email or password" });
            } else {
                const user = new User({ name, email, phone, password });
                const saved = await user.save();

                if (saved) {
                    return res.status(201).json({ message: "User registered successfully" });
                } else {
                    return res.status(500).json({ error: "User registration failed" });
                }
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    }
})


router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(404).json({ error: "please fill all the fields properly" });
    } else {
        const userexist = await User.findOne({ email: email, password: password });
        if (!userexist) {
            return res.status(404).json({ error: "Registration required" });
        } else {
            try {
                const user = new Login({ email, password });
                const saved = await user.save();

                if (saved) {
                    return res.status(201).json({ message: "User login successfully" });
                } else {
                    return res.status(500).json({ error: "User login failed" });
                }
            } catch (error) {
                console.log("error", error);
                return res.status(500).json({ error: "Internal server error" });
            }
        }
    }
})


module.exports = router;