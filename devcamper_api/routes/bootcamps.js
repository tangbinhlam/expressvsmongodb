const express = require('express');
const {
    createBootcamp,
    deleteBootcamp,
    getBootcamp,
    getBootcamps,
    updateBootcamp,
    getBootcampsInRadius,
} = require('../controllers/bootcamps')
const router = express.Router();

router.route('/radius/:zipcode/:distance')
    .get(getBootcampsInRadius);


// Bootcams - API
router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);

module.exports = router;
