let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
const { ObjectID } = require('mongodb');


// CSV Model
let csvSchema = require('../models/csv');

// CREATE CSV
router.route('/save').post((req, res, next) => {
  csvSchema.remove().then(res => res.json())
  csvSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data).send()
    }
  })
});

// READ CSV
router.route('/').get((req, res, next) => {
  csvSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json(data)
    }
  })
})


// Delete CSV
router.route('/delete/:id').delete((req, res, next) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(404).send();
  }

  csvSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;