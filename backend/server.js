const express = require('express');
const app = express();
// require('dotenv/config');
// const cors = require('cors');
const port = 5000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     // origin: 'http://192.168.1.126:3000', for testing site from network devices
//     credentials: true,
//   })
// );

//Import Routes
const testRoute = require('./routes/test');

//Route Middlewares
// app.use('/user', authRoute);
// app.use('/refresh_token', cookieParser());
app.use('/tester', testRoute);
app.use('/test2', (req, res) => {
  res.send('got to test 2');
});

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

//Where we listen for server
app.listen(port, () => console.log(`server listening on port ${port}!`));
