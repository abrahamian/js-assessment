exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item );
  },

  sum: function(arr) {
    return arr.reduce(
      function(acc, val) {
        return acc + val;
      },
      0
    );
  },

  remove: function(arr, item) {
    return arr.filter(
      function(val) {
        return val != item;
      }
    );
  },

  removeWithoutCopy: function(arr, item) {
    for(var i=0; i < arr.length;) {
      if(arr[i] == item) {
        arr.splice(i, 1);
      } else { i++; }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.reduce(
      function(acc, val) {
        return (val == item) ? (acc + 1) : acc;
      },
      0
    );
  },

  duplicates: function(arr) {
    return arr.reduce(
      function(acc, val, i, array) {
        if((array.lastIndexOf(val) != i) && (!acc.includes(val))) {
          return acc.concat(val);
        }
        return acc;
      },
      []
    )
  },

  square: function(arr) {
    return arr.map(
      function(val) {
        return Math.pow(val, 2);
      }
    );
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce(
      function(acc, val, i, array) {
        if(val == target) { return acc.concat(i); }
        return acc;
      },
      []
    )
  }
};
