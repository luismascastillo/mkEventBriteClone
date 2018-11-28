// Create a function which is a "controller", it
// handles a request, writing the response.
const events = require('../models/events.js');

function newEvent(request, response) {
    console.log(request.body);
    console.log(events);
    // start with empty array of errors
    let errors = [];

    // validity 
    if (!request.body.title || request.body.title.length > 50) {
        errors.push('The title is too long');
    }
    if (!request.body.title || request.body.title.length === 0) {
        errors.push('Please enter an event title');
    }
    if (!request.body.location || request.body.location.length === 0) {
        errors.push('Please enter a location!');
    }

    const contextData = {
        title: 'Create an event',
        errors: errors,
    };

    if (errors.length > 0) {
        response.render('Event', contextData); //check for errors 
    } else {
        console.log(events);
        const newEvent = {
            id: events.getMaxId() + 1,
            title: request.body.title
        };
        events.addEvent(request.body);
        response.render('newEvent', contextData);
    }
}


function eventDetail(request, response) {
    console.log(request.params);
    const eventId = Number(request.params.id);
    const event = events.getById(eventId);
    if (!event) {
        response.status(404).send('No such event avail.');
    } else {
        response.render('eventDetail', { event: event });
    }
}

module.exports = {
    newEvent,
    eventDetail,
}