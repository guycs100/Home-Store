const express = require('express');
const app = express();
const cors = require('cors');

// routes
const mailRoute = require('./routes/mail');

// middlewere
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')));
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    };
    app.use(cors(corsOptions));
}

// init routes
app.use('/api/mail' ,mailRoute);


app.listen(5000, () => console.info(`app is on port 5000`))