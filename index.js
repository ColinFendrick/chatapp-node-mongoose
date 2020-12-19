require('./db/db');

const express = require('express');

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
