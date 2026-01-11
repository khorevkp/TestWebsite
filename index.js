const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
