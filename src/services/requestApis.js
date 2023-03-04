const requestApis = async (url) => {
  // console.log(url);
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  return data;
};

export default requestApis;
