exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(str2){
      return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(val) {
      return function() { return fn(val); }
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments: function() {
    return Array.prototype.reduce.call(arguments, function(acc, val) {
      return acc + val;
    }, 0);
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1)

    return function(){
      var moreArgs = Array.prototype.slice.call(arguments);
      var allArgs = args.concat(moreArgs);
      return fn.apply(null, allArgs);
    }
  },

  curryIt: function(fn) {
    var args = [];

    return function argAccumulator(x) {
      args.push(x);

      if(args.length < fn.length) {
        return function(d){
          return argAccumulator.apply(null, arguments);
        }
      } else {
        return fn.apply(null, args);
      }
    }

  }
};
