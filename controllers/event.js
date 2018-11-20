// Create a function which is a "controller", it
// handles a request, writing the response.
function newEvent(request, response) {
    response.send('sample NEWEVENT page');
   // const contextData = {
     //   title: 'This is sample event page',
    //};
    //response.render('event', contextData);
}

module.exports = {
    newEvent,
};
