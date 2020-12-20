require('./db/db');

const { express, app, http, io } = require('./main.module');
const messageRouter = require('./routers/message');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});

app.use(messageRouter);

io.on('connection', () => {
	console.log('a user is connected');
});

http.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});
