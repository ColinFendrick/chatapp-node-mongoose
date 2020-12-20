const express = require('express');
const router = new express.Router();
const Message = require('../models/message');
const { io } = require('../main.module');

router.get('/messages', async (req, res) => {
	try {
		const messages = await Message.find({});
		res.send(messages);
	} catch (e) {
		res.status(500).send(e);
	}
});

router.post('/messages', async (req, res) => {
	const message = new Message(req.body);
	try {
		await message.save();
		io.emit('message', req.body);
		res.status(201).send(message);
	} catch (e) {
		res.status(500).send(e);
	}
});

module.exports = router;
