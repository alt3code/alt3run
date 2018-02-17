var socket = io.connect('http://127.0.0.1:4300');
socket.on('connect', function(data) {
  socket.emit('join', 'Hello World from client');
});
socket.on('messages', function(data) {
   // Get first activity (testing)
  var jsonArray = JSON.parse(data);
  document.getElementById("athelete-info").innerHTML = JSON.stringify(data);

   var count = 0;
  jsonArray.forEach(function(activity) {
     count++;
  });
  document.getElementById("activity-count").innerHTML = count;
  document.getElementById("activity-type").innerHTML = jsonArray[0].type;

  var totalDistance = jsonArray[0].distance;
  document.getElementById("total-distance-text").innerHTML = totalDistance + "m (" + (totalDistance/1000).toFixed(2) + "km)";
});
