import $ from './jquery.module.js';
import 'https://cdn.socket.io/socket.io-3.0.1.min.js';

$(document).ready(() => {
	const socket = io();

	$(() => {
		$('#send').click(() =>
			sendMessage({
				name: $('#name').val(),
				message: $('#message').val()
			})
		);
		getMessages();
	});

	const getMessages = () =>{
		$('#messages').empty();
		$.get('http://localhost:3001/messages', data => data.forEach(addMessage));
	};

	const addMessage = message =>
		$('#messages').append(`
			<h4> ${message.name} </h4>
			<p>  ${message.message} </p>
		`);

	const sendMessage = message =>
		$.post('http://localhost:3001/messages', message, getMessages);

	socket.on('message', addMessage);
});
