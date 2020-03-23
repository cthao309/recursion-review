// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here

  if (obj === null) {
    return 'null';
  } else if (obj === undefined) {
    return "undefined";
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (Array.isArray(obj)) {
    let str = '';

    for (let i = 0; i < obj.length; i++) {
      str = str.concat(stringifyJSON(obj[i]) + ',');
    }

    return `[${str.slice(0, str.length - 1)}]`;
  } else if (typeof obj === 'object') {
    let str = '';

    for (let key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        str = str.concat(stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',')
      }
    }

    return `{${str.slice(0, str.length - 1)}}`;

  } else {
    return obj.toString();
  }
}
