const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
	// name: String,
	// message: String
	name: {
		type: String,
		required: true
	},
	message: {
		type: String,
		trim: true,
		required: true
	}
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
