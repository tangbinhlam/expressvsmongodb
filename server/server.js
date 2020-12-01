const http = require('http');
const { restart } = require('nodemon');

const employees = [
    {
        id: 1,
        name: 'lam',
        age: 30
    },
    {
        id: 2,
        name: 'Hoai',
        age: 34
    },
    {
        id: 3,
        name: 'Hung',
        age: 32
    }
]

const server = http.createServer((req, res) => {
    res.writeHead(404, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Node.js'
    });
    res.end(JSON.stringify({
        success: false,
        error: 'Not Found',
        data: null,
    }));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
