const dataStore = {
	tickets: [],
	socket: null
};

// -----------------------------
// Lokales Speichern von Daten

let item = window.localStorage.getItem(12345);
if (!item) {
	window.localStorage.setItem(12345, dataStore.tickets);
}

// -----------------------------
// Abfragen des Online Status

function handleOnlineStateChange() {
	let state = navigator.onLine ? 'online' : 'offline';
	console.log('Der Browser ist : ' + state);
}

window.addEventListener('online', handleOnlineStateChange);
window.addEventListener('offline', handleOnlineStateChange);
// -----------------------------

(function initial_connect() {
	let socket = io('/');

	socket.on('connect', () => {
		console.log('Connected');
	});

	socket.on('getTicketList_resp', (data) => {
		console.log('getTicketList_resp DATA ', data);
		dataStore.tickets = data;
	});

	socket.on('TicketStatusChanged', (data) => {
		console.log('TicketStatusChanged DATA ', data);

		let ticket = dataStore.tickets.find((ticket) => ticket.id == data.id);
		if (ticket) {
			ticket.status = data.status;
		} else {
			console.log('Kein Ticket gefunden');
		}
	});

	socket.emit('getTicketList');
	dataStore.socket = socket;
})();

function getTicketList(event) {
	dataStore.socket.emit('getTicketList');
}

function setTicketStatus(event) {
	dataStore.socket.emit('setTicketStatus', { id: 2, status: 'InProgress' });
}

function disconnect(event) {
	dataStore.socket.close();
	dataStore.socket = null;
}
