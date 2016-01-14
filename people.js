var people = (function(){
	var people = ["Yannis"];
	
	console.log("initiated");
	
	function addPerson(name) {
		people.push(name);
		listEveryone();
		pubsub.publish("peopleChanged", people);
	}
	
	function deletePerson(i) {
		people.splice(i, 1);
		listEveryone();
	}
	
	function listEveryone() {
		console.log(people);
	}
	
	return {
		addPerson: addPerson,
		deletePerson: deletePerson,
		listEveryone: listEveryone
	};
})();