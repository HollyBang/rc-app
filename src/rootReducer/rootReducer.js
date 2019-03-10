import { combineReducers } from 'redux';
import constants from '../constants/constants';
import lang from '../languages/en/en'

const newsInitialState = [];

const languageReducer = (state = lang, action) => {
    switch(action.type) {
        case constants.CHANGE_LANGUAGE_STORE: {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
};

const newsReducer = (state = newsInitialState, action) => {
    switch(action.type) {
        case constants.GET_NEWS_STORE: {
            return [
                ...state,
                ...action.payload
            ]
        }
        default: {
            return state;
        }
    }
};

const rootReducer = combineReducers({
    languages: languageReducer,
    news: newsReducer,
});
export default rootReducer;