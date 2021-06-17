const express = require('express');
const booksRoute = require('./route/booksRoute');
const userRoute = require('./route/userRoute');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(userRoute);
app.listen(3000);

