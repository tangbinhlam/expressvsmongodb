const express = require('express');
const router = express.Router();

// Bootcams - API
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: `Show all bootcamps` });
});

router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Show bootcamp with id = ${req.params.id}` });
});

router.post('/', (req, res) => {
    res.status(201).json({ success: true, msg: `Create bootcamp` });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp  with id = ${req.params.id}` });
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp  with id = ${req.params.id}` });
})

module.exports = router;
