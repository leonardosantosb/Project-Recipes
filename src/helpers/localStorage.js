export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  const dados = JSON.parse(localStorage.getItem(key)) || [];
  return dados;
};
