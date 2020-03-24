// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here

  console.log('incoming json =>', json)

  // function to to generate the array
  const removeStrings = function(json) {
    if(json[0] === '"' && json[json.length - 1] === '"') {
      return json.slice(1, json.length - 1)
    }

    return json;
  }

  // base case
  if(json === 'null') {
    return null;
  } else if(json === 'true') {
    return true;
  } else if(json == Number(json)) {
    return Number(json);
  }

  if(json[0] === '"' && json[json.length - 1] === '"') {
    let result = removeStrings(json);
    console.log('result => ')
    return result;
  }

  // recursive call for array
  if(json[0] === '[' && json[json.length - 1] === ']') {
    let jsonBody = json.slice(1, json.length - 1);

    let jsonArray = jsonBody.split(',');

    let resultArray;

    if(!jsonArray.length) {
      resultArray = jsonArray.map((el) => parseJSON(el));
    } else {
      return [];
    }

    console.log(JSON.parse(json), resultArray)
    return resultArray;
  } else {
    return undefined;
  }

  if(json[0] === '{' && json[json.length - 1] === '}') {
    if(json === '{}') {
      return {};
    }

    let resultObj = {};

    let jsonBody = json.slice(1, json.length - 1);

    let value = '';

    if(jsonBody.indexOf(',')) {
      value = jsonBody.slice(jsonBody.indexOf(':') + 1, jsonBody.indexOf(',')).trim();

      console.log('value => ', value)
    } else {
      value = jsonBody.slice(jsonBody.indexOf(':') + 1).trim();

      console.log('value => ', value)
    }

    value = removeStrings(value);
    let key = jsonBody.slice(1, jsonBody.indexOf(':'));

    resultObj[key] = value;
    console.log(resultObj)

    return resultObj;
  } else {
    return undefined;
  }

};
