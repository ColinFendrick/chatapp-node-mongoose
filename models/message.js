const mongoose = require('mongoose');

const messageSchema = mongoose.schema({
	name: String,
	message: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
