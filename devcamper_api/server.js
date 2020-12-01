const express = require('express');
const dotenv = require('dotenv');

// Load evn vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Bootcams - API
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: `Show all bootcamps` });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp with id = ${req.params.id}` });
});

app.post('/api/v1/bootcamps', (req, res) => {
    res.status(201).json({ success: true, msg: `Create bootcamp` });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp  with id = ${req.params.id}` });
})

app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp  with id = ${req.params.id}` });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
