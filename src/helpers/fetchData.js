export const fetchData = (endpoint, action, dispatch) => {
  let data = undefined;
  let pending = true;

  (async () => {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      if (response.ok) {
        data = json.data;
        pending = false;
      } else {
        throw new Error(json.message);
      }
    } catch (error) {
      pending = false;
      console.log('Error: ' + error.message);
    }

    !pending && dispatch(action(data));
  })();
};
