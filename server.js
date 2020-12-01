const http = require('http');

const server = http.createServer((req, res) => {
    const { headers, url, method } = req;

    console.log(headers, url, method);

    res.hasHeader('Content-Type', 'text/html');
    res.hasHeader('X-Powered-By', 'Node.js');
    res.write('<h1>Welcome</h1>');
    res.write('<h3>Frist Test</h3>');

    res.end();
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
