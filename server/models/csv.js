const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let csvSchema = new Schema({
  csvData: Array,
  csvInfo: Object
}, {
  collection: 'csv'
})

module.exports = mongoose.model('CSV', csvSchema)