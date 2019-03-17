import constants from '../../constants/constants';

export const getNews = payload => ({ type: constants.GET_NEWS, payload });

export const getNewsStore = payload => ({ type: constants.GET_NEWS_STORE, payload });

export const readNews = payload => ({ type: constants.READ_NEWS, payload });

export const readNewsStore = payload => ({ type: constants.READ_NEWS_STORE, payload });

export const closeNews = payload => ({ type: constants.CLOSE_NEWS, payload });

export const closeNewsStore = payload => ({ type: constants.CLOSE_NEWS_STORE, payload });
