
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exampleSchema = new Schema({
  field_1: {
    type: String
  },
	field_2: {
		type: String
	}
});

module.exports = mongoose.model('Example', exampleSchema);
