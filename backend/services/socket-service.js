const gameService = require('./game-service.js');
var gRooms = [];
var gSocketsId = {};
var gRoomId = 1; 

const findAvailableRoom = () =>
	gRooms.find(({ members }) => members.length === 1);

const createRoom = user => ({
	members: [user],
	id: gRoomId++
});

 function findRoom(roomId){
    return gRooms.find(room => roomId === room.id)
}

function isAvailable(room){
    return room.members.length < 2;
}

module.exports = io => {


    io.on('connection', socket => {
        console.log('a user connected');
        socket.on('disconnect', () => {
          console.log('user disconnected');
        });

        // socket.on('gameRoom', function(gameRoomId, userName) {
        socket.on('gameRoom', function(userName) {
            var userRoom;
            var availableRoom = findAvailableRoom();
            if (availableRoom) {
                var userRoom = availableRoom;
                console.log('availableRoom.members[0]',availableRoom.members[0], 'userName', userName)
                if (availableRoom.members[0] == userName) {
                    userName = userName + 1;
                    userRoom.members.push(userName);
                    console.log(userRoom.members)
                } else {
				console.log(
					`${userName} added to availableRoom ${JSON.stringify(
						userRoom,
						null,
						2
                      )}`
                    );
                userRoom.members.push(userName);
                }
            } else {
				userRoom = createRoom(userName);
				gRooms.push(userRoom);
				console.log(
					`${userName} added to new room ${JSON.stringify(
						userRoom,
						null,
						2
					)}`
				);
			}

            // console.log('current rooms', gRooms)

            socket.join(userRoom.id);
            // io.to - send to everyone in the room (include the sender)
            (userRoom.members.length === 1) ? io.to(userRoom.id).emit('gameRoom', {userName, turn: true}) : 
            io.to(userRoom.id).emit('gameRoom', {userName, turn: false, gameRoom: userRoom})

            // console.log('joind to gameRoom', gameRoomId);
        });

        socket.on('wordChosen', function(gameRoom, word) {
            console.log('word-socket', word);
            var userRoom = findRoom(gameRoom.id);
            io.to(userRoom.id).emit('wordChosen', {selectedWord: word});

        });

        socket.on('drawSubmitted', function(gameRoom, url) {
            var userRoom = findRoom(gameRoom.id);
            io.to(userRoom.id).emit('drawSubmitted', {drawUrl: url});

        });

        socket.on('gameOver', function(gameRoom) {
            var userRoom = findRoom(gameRoom.id);
            io.to(userRoom.id).emit('gameOver');

        });

        socket.on('setUserName', function(gameRoom) {
            var userRoom = findRoom(gameRoom.id);
            io.to(userRoom.id).emit('gameOver');

        });


    });

}