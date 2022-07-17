export const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'f1da2e96854754de41624ac489a8286f',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
