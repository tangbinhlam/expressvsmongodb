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

    const { method, url } = req;
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    })
        .on('end', () => {
            body = Buffer.concat(body).toString();

            let status = 404;
            let response = {
                success: false,
                data: null,
                error: null
            }

            if (method === 'GET' && url === '/employees') {
                status = 200;
                response = {
                    ...response,
                    success: true,
                    data: employees,
                }
            } else if (method === 'POST' && url === '/employees') {
                const { id, name, age } = JSON.parse(body);
                if (!id || !name || !age) {
                    status = 400;
                    response = {
                        ...response,
                        error: 'Please Id | Name | Age',
                    }
                } else {
                    status = 201;
                    employees.push({ id, name, age });
                    response = {
                        ...response,
                        success: true,
                        data: employees,
                    }
                }
            }

            res.writeHead(status, {
                'Content-Type': 'application/json',
                'X-Powered-By': 'Node.js'
            });
            res.end(JSON.stringify(response));
        })
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
