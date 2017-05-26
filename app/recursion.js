exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  	function getFiles(filesArray, node) {
  		return node.files ? filesArray.concat(node.files.reduce(getFiles, [])) : filesArray.concat(node);
  	}

  	function locateDir(targetDir, dirName) {
  		var i = 0;
  		var subDirs = targetDir.files.filter(function(node){ return !!node.dir; });
  		while(i < subDirs.length) {
  			var node = subDirs[i];
  			return node.dir == dirName ? node : locateDir(node, dirName);
				i++;
  		}
  	}

  	var targetDir = dirName ? locateDir(data, dirName) : data;

		return targetDir.files.reduce(getFiles,[]);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
