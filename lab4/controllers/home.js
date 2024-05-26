// Controller handler to handle functionality in home page

// Example for handle a get request at '/' endpoint.

function getHome(request, response) {
  //place holder for actual room names and ids
  let chatrooms_to_be_displayed = [{ roomName: 'CS110', roomID: 'ABC123' },{ roomName: 'CS111', roomID: 'XYZ456' }];
  response.render('home', { title: 'Home', chatrooms: chatrooms_to_be_displayed });
}

module.exports = {
  getHome
};
