const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const routes = require('./routes/routes');
const port = process.env.PORT

app.use(cors({
    origin: ['http://localhost:7000', 'https://nextjs-ott-platform.onrender.com'], // Add your domains here
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
}));

require('./db/db');
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(port, () => {
    console.log("app running on port no", port);
})