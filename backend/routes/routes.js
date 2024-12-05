const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


router.post("/contact", async (req, res) => {
    let success = false

    const { name, email, desc } = req.body;

    if (!name || !email || !desc) {
        return res.status(400).json({ success, error: "please fill all the fields" });
    } else {

        try {
            const contacts = new Contact({ name, email, desc });
            const saved = await contacts.save();

            if (saved) {
                success = true
                return res.status(201).json({ success, message: "message submitted successfully" });
            } else {
                success = false
                return res.status(404).json({ success, error: "error occurs" });
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ success, error: "Internal server error" });
        }

    }

})


router.post("/user", async (req, res) => {
    let success = false
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
        return res.status(400).json({ success, error: "please fill all the fields properly" });
    } else {
        try {
            const userexist = await User.findOne({ email: email, password: password });
            if (userexist) {
                return res.status(401).json({ success, message: "User already exists with same email or password" });
            } else {
                const user = new User({ name, email, phone, password });
                const saved = await user.save();

                if (saved) {
                    success = true
                    return res.status(201).json({ success, message: "User registered successfully" });
                } else {
                    success = false
                    return res.status(404).json({ success, error: "User registration failed" });
                }
            }
        } catch (error) {
            console.log("error", error);
            return res.status(500).json({ success, error: "Internal server error" });
        }
    }
})


router.post("/login", async (req, res) => {
    let success = false
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success, error: "please fill all the fields properly" });
    } else {
        const userexist = await User.findOne({ email: email });
        if (!userexist) {
            return res.status(401).json({ success, error: "Registration required" });
        } else {

            try {
                const ismatch = await bcrypt.compare(password, userexist.password);

                if (ismatch) {
                    success = true
                    const token = await userexist.generateAuthToken();
                    return res.status(201).json({ success, message: "User login successfully", token });
                } else {
                    return res.status(404).json({ success, error: "Invalid credentials" });
                }

            } catch (error) {
                console.log("error", error);
                return res.status(500).json({ success, error: "Internal server error" });
            }
        }
    }
})


module.exports = router;