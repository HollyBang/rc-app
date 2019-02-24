import constants from '../../constants/constants';

export const changeLanguage = payload => {
    return {
        type: constants.CHANGE_LANGUAGE_STORE,
        payload: payload
    }
};
