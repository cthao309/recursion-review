// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  // data structure to store our result
  const result = [];

  const getElementsByClass = function(nodes) {
    // check if there are any nodes in the body
    if(nodes !== undefined) {

      // retreive all the nodes classes
      const classList = nodes.classList;

      if(nodes.length) {
        for(let i = 0; i < nodes.length; i++) {
          let currentNode = nodes[i];

          if(currentNode.classList !== undefined) {
            getElementsByClass(currentNode);
          }
        }
      } else {
        if(classList) {
          if(classList.contains(className)) {
            result.push(nodes)
          }

          getElementsByClass(nodes.childNodes);
        }
      }
    }


  }

  getElementsByClass(document.body)

  // return the result
  return result;
};
