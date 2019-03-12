import { combineReducers } from 'redux';
import constants from '../constants/constants';
import lang from '../languages/en/en'

const newsInitialState = [];
const balanceInitialState = 100;

const languageReducer = (state = lang, action) => {
    switch (action.type) {
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
    switch (action.type) {
        case constants.GET_NEWS_STORE: {
            return [
                ...state,
                ...action.payload
            ]
        }
        case constants.READ_NEWS_STORE: {
            console.log("READ_NEWS_STORE news id = " + action.payload.ID)
            return state.map(news => {
                if (news.ID === action.payload.ID) {
                    return { ...news, isOpened: true, isRead: true }
                }
                return { ...news, isOpened: false }
            })
        }
        case constants.CLOSE_NEWS_STORE: {
            console.log("CLOSE_NEWS_STORE news id = " + action.payload.ID)
            return state.map(news => {
                if (news.ID === action.payload.ID) {
                    return { ...news, isOpened: false }
                }
                return { ...news }
            })
        }
        default: {
            return state;
        }
    }
};

const balanceReducer = (state = balanceInitialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};

const rootReducer = combineReducers({
    languages: languageReducer,
    news: newsReducer,
    balance: balanceReducer
});
export default rootReducer;