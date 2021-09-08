const fetchData = async endpoint => {
  let data;

  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    if (response.ok) {
      data = json.data;
    } else {
      throw new Error(json.message);
    }
  } catch (error) {
    console.log('Error: ' + error.message);
  }

  return data;
};

export default fetchData;
