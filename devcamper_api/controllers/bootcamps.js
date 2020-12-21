const Bootcamp = require('../models/Bootcamp')


// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.find();
        res.status(200).json(
            {
                success: true,
                data: bootcamp,
                msg: `All Bootcamps`
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                success: false,
            }
        );
    }
}

// @desc    Get bootcamp with id
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json(
            {
                success: true,
                data: bootcamp,
                msg: `Show bootcamp with id = ${req.params.id}`
            }
        );
    } catch (error) {
        res.status(404).json(
            {
                success: false,
            }
        );
    }
}

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);
        console.log(bootcamp);
        res.status(201).json(
            {
                success: true,
                data: bootcamp,
                msg: `Create bootcamp`
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                success: false,
            }
        );
    }
}

// @desc    Update bootcamp with id
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp  with id = ${req.params.id}` });
}

// @desc    Delete bootcamp with id
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp  with id = ${req.params.id}` });
}
