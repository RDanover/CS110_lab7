// Controller handler to handle functionality in room page

const roomGenerator = require('../public/util/roomIdGenerator.js');

// Example for handle a get request at '/:roomName' endpoint.
function getRoom(request, response){
    response.render('room', {title: 'chatroom', roomName: request.params.roomName, newRoomId: roomGenerator.roomIdGenerator()});
}

module.exports = {
    getRoom
};