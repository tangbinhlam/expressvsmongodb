const express = require('express');
const {
    createBootcamp,
    deleteBootcamp,
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    getBootcampsInRadius,
    bootcampPhotoUpload,
} = require('../controllers/bootcamps')
// Include other resource routers
const courseRouter = require('./Courses');

const router = express.Router();

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo')
    .put(bootcampPhotoUpload)
// Bootcams - API
router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;
