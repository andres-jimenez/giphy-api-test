const translateParams = params => {
  const paramsArray = [];

  for (const prop in params) {
    paramsArray.push(prop + '=' + params[prop]);
  }

  return paramsArray.join('&');
};

export default translateParams;
