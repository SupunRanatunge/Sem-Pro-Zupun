const express = require('express');

var app = express();

app.use(express.static(__dirname+ '/oosd-project-master'));
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.listen(3000);