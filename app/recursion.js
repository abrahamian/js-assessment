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
  	return arr.reduce(function permute(permutations, item, index, arr) {

			if(arr.length > 1) {
				var arrayWithoutThisElement = arr.slice(0, index).concat(arr.slice(index + 1));
				var permutationsOfArrayWithoutThisElement = arrayWithoutThisElement.reduce(permute, []);
				var newPermutations = permutationsOfArrayWithoutThisElement.map(function(perm) { return [item].concat(perm); });
				return permutations.concat(newPermutations);
			}

			return permutations.concat(item);

		}, []);
  },

  fibonacci: function(n) {
  	return (new Array(n).fill(null)).reduce(function(seq, val, i) {
  		return seq.concat((seq[i-1] || 1) + (seq[i-2] || 0));
  	}, [])[n-1];
  },

  validParentheses: function(n) {
  	var permute = this.permute;

  	var arr1 = new Array(n).fill("(")
  	var arr2 = new Array(n).fill(")")

  	var arr = arr1.concat(arr2);

  	function removeOutermostParentheses(str){
  		return str.slice(1).replace(")", "");
  	}

  	function hasValidParentheses(str){
  		var firstOpeningIsBeforeFirstClosing = (str.indexOf("(") < str.indexOf(")"));
  		var lastOpeningIsBeforeLastClosing = (str.lastIndexOf(")") > str.lastIndexOf("("));

  		if ( firstOpeningIsBeforeFirstClosing && lastOpeningIsBeforeLastClosing ) {
  			if(str.length == 2) {
  				return true
  			} else {
					return hasValidParentheses(removeOutermostParentheses(str));
  			}
  		} else {
  			return false;
  		}

  	}

  	function uniqueArray(arr){
  		return arr.reduce(function(acc, val, i, array) {
  			return (acc.indexOf(val) > -1) ? acc : acc.concat([val]);
  		}, []);
  	}

  	var arrayOfPermutationStrings = permute(arr).map(function(array){return array.join(""); })
  	return uniqueArray(arrayOfPermutationStrings).filter(hasValidParentheses);

  }

};
