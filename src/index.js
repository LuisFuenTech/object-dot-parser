const parseStringDotObject = (data) => {
  const mainProcess = (object) => {
    const keys = Object.keys(object);
    const result = {};

    const parseObject = (parentObject, keysArray, value) => {
      if (keysArray.length === 1) {
        parentObject[keysArray[0]] = value;

        return parentObject;
      }

      parentObject[keysArray[0]] = parentObject[keysArray[0]] || {};
      return parseObject(parentObject[keysArray[0]], keysArray.slice(1), value);
    };

    for (let i = 0; i < Object.keys(object).length; i++) {
      parseObject(result, keys[i].split('.'), object[keys[i]]);
    }

    return result;
  };

  /* istanbul ignore else */
  if (data instanceof Object && !Array.isArray(data)) {
    return mainProcess(data);
  }

  /* istanbul ignore else */
  if (Array.isArray(data)) {
    return data.map((object) => mainProcess(object));
  }
};

module.exports = parseStringDotObject;
