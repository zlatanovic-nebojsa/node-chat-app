let socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage', {
		from: 'shone',
		text: 'bla bla'
	});
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
	console.log('newMessage:', message);
})