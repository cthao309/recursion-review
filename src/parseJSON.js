// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function (json) {
  // your code goes here

  console.log('incoming json =>', json)

  json = json.trim();

  console.log('json trim =>', json)


  // function to check if it is a valid object type
  const isValidObjType = function (json) {
    const parenthese = [];

    for (let i = 0; i < json.length; i++) {
      if (json[i] === '[') {
        parenthese.push('[')
      } else if (json[i] === ']') {
        parenthese.pop();
      }
    }
    console.log('parentheses===', parenthese);

    return !parenthese.length ? true : false;
  }

  // function to to generate the array
  const removeStrings = function(json) {
    console.log('remove',json)
    if(json[0] === '\"' && json[json.length -1] === '\"') {
      return json.slice(1, json.length -1)
    }

    return json;
  }

  // base case
  if(json === 'null') {
    return null;
  } else if(json === 'true') {
    return true;
  } else if(json === Number(json)) {
    return Number(json);
  }

  if(json[0] === '\"' && json[json.length - 1] === '\"') {
    let result = removeStrings(json);
    console.log('result => ')
    return result;
  }

  // recursive call for array
  if(json[0] === '[' && json[json.length -1] === ']') {
    let jsonBody = json.slice(1, json.length -1);

    let jsonArray = jsonBody.split(',');

    let resultArray;

    if(!jsonArray.length) {
      resultArray = jsonArray.map((el) => parseJSON(el));
    } else {
      console.log('empty array => ', JSON.parse(json), [], JSON.parse(json) === [])
      return [];
    }

    console.log(JSON.parse(json), resultArray)
    return resultArray;
  }

};
