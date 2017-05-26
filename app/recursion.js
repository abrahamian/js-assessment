exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  	function getFiles(filesArray, node) {
  		return node.files ? filesArray.concat(node.files.reduce(getFiles, [])) : filesArray.concat(node);
  	}

  	function locateDir(parentDir, dirName) {
  		var subDirs = parentDir.files.filter(function(node){ return !!node.dir; });

  		var i = 0;
  		while(i < subDirs.length) {
  			var dir = subDirs[i];
  			return dir.dir == dirName ? dir : locateDir(dir, dirName);
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
