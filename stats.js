var stats = (function() {
	var stats = 5;
	
	pubsub.subscribe("peopleChanged", countPeople);
	
	function countPeople(data) {
      console.log("Someone added"+data.length);
      $('#statsbox').text(data.length);
      $('#namebox').text(data);
	}
})();