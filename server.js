const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const users = require('./users/users.controller');
const login = require('./login/login.controller');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/login', login);
app.use('/users', users);


app.get('/', (req, res) => { res.send({ message: 'hello world' }); });

const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));