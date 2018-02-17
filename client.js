// client.js
// var socket = io.connect('http://localhost:3000/data', ***REMOVED***reconnect: true***REMOVED***);
//
// // Add a connect listener
// socket.on('connect', function (socket) ***REMOVED***
//     socket.send('Connected!');
//     $('h1.connect-text').html("Connected!");
// ***REMOVED***);
var socket = io.connect('http://localhost:8010');
socket.on('news', function (data) ***REMOVED***
  console.log(data);
  socket.emit('my other event', ***REMOVED*** my: 'data' ***REMOVED***);
***REMOVED***);
