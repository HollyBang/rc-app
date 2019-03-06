import constants from '../../constants/constants';

export const getNews = payload => {
    return {
        type: constants.GET_NEWS,
        payload: payload
    }
};
