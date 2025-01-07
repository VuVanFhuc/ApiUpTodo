const express = require('express');
const app = express();
const port = 3000;
const logger = require('morgan');

const database = require('./Config/Db');


const RouteApiAcount = require('./Route/RouteApiAcount');


app.use(express.json());
app.use(logger('dev'));

app.use('/Acounts',RouteApiAcount)


database.connect();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('WEB');
});

module.exports = app;