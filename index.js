const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const responseTime = require('response-time')
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    () => console.log('Connected to DB!'));

const routes = require('./routes/routes')

app = express();

app.use(responseTime());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: ['http:localhost:3000' ]
}))
app.use(express.json())
app.use('/api', routes)

app.listen(8000)