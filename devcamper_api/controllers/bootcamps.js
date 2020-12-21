const ErrorResponse = require('../utils/errorResponse');
const Bootcamp = require('../models/Bootcamp');
const asyncHandler = require('../middleware/async');

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json(
        {
            success: true,
            data: bootcamps,
            count: bootcamps.length,
            msg: `All Bootcamps`
        }
    );
});

// @desc    Get bootcamp with id
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
        return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true, data: bootcamp, msg: `Show bootcamp with id = ${req.params.id}`
    }
    );
});

// @desc    Create bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json(
        {
            success: true,
            data: bootcamp,
            msg: `Create bootcamp`
        }
    );
});

// @desc    Update bootcamp with id
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })
    if (!bootcamp) {
        return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, msg: `Update bootcamp  with id = ${req.params.id}`, data: bootcamp });
});

// @desc    Delete bootcamp with id
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp) {
        return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, msg: `Delete bootcamp  with id = ${req.params.id}`, data: {} });
});
