const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.send('Hello World'))
const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))