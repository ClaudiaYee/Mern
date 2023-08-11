const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();
const books = require('./routes/api/books');

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

// use Routes
app.use('/api/books', books);

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));