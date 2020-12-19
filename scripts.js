import $ from './jquery.module.js';

$(document).ready(() => {
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
});
