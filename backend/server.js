const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const history = require('connect-history-api-fallback');
const addUserRoutes = require('./routes/user-route');

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(cors({
  origin: ['http://localhost:8080'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(session({
  secret: 'guess app',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    expires: 600000
  }
}))

addUserRoutes(app);

//backend port check
// app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
// });

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/public/index.html');
// });

app.use(history());
app.use(express.static('public'));
  
const socketService = require('./services/socket-service');
socketService(io);
  
const PORT = process.env.PORT || 3003;
http.listen(PORT, () => console.log(`guess app listening on port ${PORT}`));
  


