import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air',
};

export const tmdbApi = {
  getMoviesList: (type, params) => {
    //const url = category[cate] + '/' + id + '/videos';
    const url = `/movie/${type}`;
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    // const url = 'tv/' + tvType[type];
    const url = `/tv/${type}`;
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    // const url = category[cate] + '/' + id + '/videos';
    const url = `/${cate}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    // const url = 'search/' + category[cate];
    const url = `/search/${cate}`;
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    // const url = category[cate] + '/' + id;
    const url = `/${cate}/${id}`;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    // const url = category[cate] + '/' + id + '/credits';
    const url = `/${cate}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    // const url = category[cate] + '/' + id + '/similar';
    const url = `/${cate}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  },
};

export default tmdbApi;
