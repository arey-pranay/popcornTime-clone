// searchMov.js (separate file)
export const searchMov = async (apiKey, title) => {
  const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();
  return data.Search;
};
