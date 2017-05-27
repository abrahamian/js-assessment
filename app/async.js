exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject) {
  		resolve(value);
  	})
  },

  manipulateRemoteData: function(url) {
  	return new Promise(function(resolve, reject) {
	  	$.get(url, function(data) {
	  		var names = data.people.map(
	  			function(person) {
	  				return person.name;
	  			}
	  		);
	  		resolve(names.sort());
	  	});
  	});
  	
  }
};
