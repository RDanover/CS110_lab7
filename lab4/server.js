// import dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const path = require('path');

// import handlers
const homeHandler = require('./controllers/home.js');
const roomHandler = require('./controllers/room.js');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//SERVER SIDE CODE:

//Placeholders for database

let chatrooms = [{ roomName: 'CS110', roomID: 'ABC123' },{ roomName: 'CS111', roomID: 'XYZ456' }];
let messages = [{nickname: 'Herbert', messageID:'ABC123', body: 'Enjoy it before I destroy it!'}];

app.get('/', homeHandler.getHome);//returns home page
app.get('/:roomName/:roomID', roomHandler.getRoom);//returns chatroom page of specified roomName and ID


//Placeholders for database 
app.get('/chatrooms', (req, res) => {
    console.log('Chatrooms requested');
    res.json(chatrooms); 
});

app.get('/:roomName/:roomID/messages', (req, res) => {
    console.log('Messages requested');
    res.json(messages); 
});

app.post('/:roomName/:roomID', (req, res) => {
    console.log('New room created');
    let new_room = { roomName: req.params.roomName, roomID: req.params.roomID }
    chatrooms.push(new_room);
});

app.post('/:roomName/:roomID/:messageID/:nickname/:message', (req, res) => {
    console.log('New chat created');
    let new_message = { nickname: req.params.nickname, messageID: req.params.messageID, body: req.params.message}
    messages.push(new_message);
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));