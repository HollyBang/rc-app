import constants from '../../constants/constants';

export const getNews = payload => ({ type: constants.GET_NEWS, payload });

export const getNewsStore = payload => ({ type: constants.GET_NEWS_STORE, payload });
