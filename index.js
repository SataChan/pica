const express = require('express');
const app = express();
const port = 11037;

app.get('/', (req, res) => {

    res.send('Hello, world');
});

app.listen(port, () => {
    console.log('listening port :', port);
});
