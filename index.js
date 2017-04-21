const express = require('express');

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
});

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// // tell the app to look for static files in these directories
// app.use(express.static('./server/static/'));
// app.use(express.static('./client/dist/'));
// // tell the app to parse HTTP body messages
// app.use(bodyParser.urlencoded({ extended: false }));

// // routes
// const authRoutes = require('./server/routes/auth');
// app.use('/auth', authRoutes);

// // start the server
// app.listen(5000, () => {
//   console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
// });