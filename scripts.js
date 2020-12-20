import $ from './jquery.module.js';
import 'https://cdn.socket.io/socket.io-3.0.1.min.js';

$(document).ready(() => {
	const socket = io();
	const url = 'http://localhost:3001/messages';

	$(() => {
		$('#send').click(() =>
			sendMessage({
				name: $('#name').val(),
				message: $('#message').val()
			})
		);

		$('#delete').click(() =>
			deleteMessage({ _id: $('#_id').val() })
		);

		getMessages();
	});

	const getMessages = () => {
		$('#messages').empty();
		$.get(url, data => data.forEach(addMessage));
	};

	const deleteMessage = message =>
		$.delete(`url/${message._id}`).then(getMessages);

	const addMessage = message =>
		$('#messages').append(`
			<h4> ${message.name} </h4>
			<p>  ${message.message} </p>
			<div id='delete' class='btn btn-danger'>Delete</div>
			<input id='_id' class='.d-none' placeholder=''>
		`);

	const sendMessage = message =>
		$.post(url, message, getMessages);

	socket.on('message', addMessage);
});
