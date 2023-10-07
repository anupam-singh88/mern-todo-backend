const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('connected baby')
})

app.listen(8000)