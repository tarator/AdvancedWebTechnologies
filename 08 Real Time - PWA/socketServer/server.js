const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = 8080;

const dataStore = {
	tickets: [
		{
			id: 1,
			subject: 'Passwort vergessen',
			status: 'registered'
		},
		{
			id: 2,
			subject: 'Internet gelöscht - bin am Ende angekommen',
			status: 'registered'
		},
		{
			id: 3,
			subject: 'Geht nicht',
			status: 'registered'
		}
	]
};

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
	console.log('Neue Connection eingetroffen');

	// anfragen aller Tickets - als Liste
	socket.on('getTicketList', (filter_data) => {
		console.log('Anfrage nach allen Tickets');
		socket.emit('getTicketList_resp', dataStore.tickets);
	});

	socket.on('setTicketStatus', (ticket_data) => {
		console.log('Ticket Data Changed ', ticket_data);
		io.emit('TicketStatusChanged', ticket_data);
	});

	socket.on('disconnect', () => {
		console.log('Disconnected');
	});
});

server.listen(PORT, () => {
	console.log('Listen on Port ' + PORT);
});
