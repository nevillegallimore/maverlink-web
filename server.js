// import external dependencies
const express = require('express');

// import system dependencies
const path = require('path');

////////////////////////////////////////////////////////////////////////////////////////////////////

const server = express();

server.use('/maverlink-web/', express.static('build'));

server.get('/maverlink-web/', (request, response) => {
    response.sendFile(path.resolve(__dirname, './build/index.html'));
});

server.listen(3030, () => {
    console.log('Server running @ http://localhost:3030/.');
});
