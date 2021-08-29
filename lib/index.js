"use strict";

var parseStringDotObject = function parseStringDotObject(data) {
  var mainProcess = function mainProcess(object) {
    var keys = Object.keys(object);
    var result = {};

    var parseObject = function parseObject(parentObject, keysArray, value) {
      if (keysArray.length == 1) {
        parentObject[keysArray[0]] = value;
        return parentObject;
      } else {
        parentObject[keysArray[0]] = parentObject[keysArray[0]] || {};
        return parseObject(parentObject[keysArray[0]], keysArray.slice(1), value);
      }
    };

    for (var i = 0; i < Object.keys(object).length; i++) {
      parseObject(result, keys[i].split("."), object[keys[i]]);
    }

    return result;
  };
  /* istanbul ignore else */


  if (data instanceof Object && data.length === undefined) return mainProcess(data);
  /* istanbul ignore else */

  if (data instanceof Array) return data.map(function (object) {
    return mainProcess(object);
  });
  return;
};

module.exports = parseStringDotObject;